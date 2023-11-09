import React from "react";
import GeneralRoutes from "./generalRoutes";
import { PluginLayout } from "@erxes/ui/src/styles/main";
import { AppProvider } from "coreui/appContext";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@erxes/ui/src/apolloClient";
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <PluginLayout>
          <GeneralRoutes />
        </PluginLayout>
      </AppProvider>
    </ApolloProvider>
  );
};

export default App;
