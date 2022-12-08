import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

import { generateModels } from './connectionResolver';
import { getSubdomain } from '@erxes/api-utils/src/core';
import { initBroker, sendCommonMessage } from './messageBroker';

export let mainDb;
export let graphqlPubsub;
export let serviceDiscovery;

export let debug;

export default {
  name: 'documents',
  graphql: sd => {
    serviceDiscovery = sd;
    return {
      typeDefs,
      resolvers
    };
  },
  hasSubscriptions: true,
  segment: {},
  apolloServerContext: async (context, req) => {
    const subdomain = getSubdomain(req);

    context.subdomain = subdomain;
    context.models = await generateModels(subdomain);
  },

  getHandlers: [
    {
      path: '/print',
      method: async (req, res, next) => {
        const { _id, stageId, itemId } = req.query;
        const subdomain = getSubdomain(req);
        const models = await generateModels(subdomain);
        const document = await models.Documents.findOne({ _id });

        if (!document) {
          return res.send('Not found');
        }

        const userId = req.headers.userid;

        if (!document) {
          return res.send('Not found');
        }

        if (!userId) {
          return next(new Error('Permission denied'));
        }

        const replacedContent = await sendCommonMessage({
          subdomain,
          serviceName: document.contentType,
          action: 'documents.replaceContent',
          isRPC: true,
          data: {
            stageId,
            itemId,
            content: document.content
          }
        });

        const style = `
          <style type="text/css">
            /*receipt*/
            html {
              color: #000;
              font-size: 13px;
              font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            }

            body {
              margin: 0;
            }

            table {
              width: 100%;
              max-width: 100%;
            }

            table tr:last-child td {
              border-bottom: 1px dashed #444;
            }

            table thead th {
              padding: 5px;
              border-top: 1px dashed #444;
              border-bottom: 1px dashed #444;
              text-align: left;
            }

            table tbody td {
              padding: 5px;
              text-align: left;
            }
          </style>
      `;

        return res.send(replacedContent + style);
      }
    }
  ],

  onServerInit: async options => {
    mainDb = options.db;

    initBroker(options.messageBrokerClient);

    debug = options.debug;
    graphqlPubsub = options.pubsubClient;
  }
};