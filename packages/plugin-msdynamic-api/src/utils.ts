import {
  sendContactsMessage,
  sendCoreMessage,
  sendProductsMessage
} from './messageBroker';

export const getConfig = async (subdomain, code, defaultValue?) => {
  return await sendCoreMessage({
    subdomain,
    action: 'getConfig',
    data: { code, defaultValue },
    isRPC: true
  });
};

export const consumeInventory = async (subdomain, doc, action) => {
  const updateCode = action === 'delete' ? doc.code : doc.No.replace(/\s/g, '');

  const config = await getConfig(subdomain, 'DYNAMIC', {});

  if (!config.category) {
    throw new Error('MS Dynamic config category not found.');
  }

  const product = await sendProductsMessage({
    subdomain,
    action: 'findOne',
    data: { code: updateCode },
    isRPC: true,
    defaultValue: {}
  });

  if ((action === 'update' && doc.No) || action === 'create') {
    const productCategory = await sendProductsMessage({
      subdomain,
      action: 'categories.findOne',
      data: { name: config.category },
      isRPC: true
    });

    const document: any = {
      name: doc?.Description || 'default',
      shortName: doc?.Description_2 || '',
      type: doc.Type === 'Inventory' ? 'product' : 'service',
      unitPrice: doc?.Unit_Price || 0,
      code: doc.No,
      uom: doc?.Base_Unit_of_Measure || 'PCS',
      categoryId: productCategory ? productCategory._id : product.categoryId,
      status: 'active'
    };

    if (product) {
      await sendProductsMessage({
        subdomain,
        action: 'updateProduct',
        data: { _id: product._id, doc: { ...document } },
        isRPC: true
      });
    } else {
      await sendProductsMessage({
        subdomain,
        action: 'createProduct',
        data: { doc: { ...document } },
        isRPC: true
      });
    }
  } else if (action === 'delete' && product) {
    await sendProductsMessage({
      subdomain,
      action: 'removeProducts',
      data: { _ids: [product._id] },
      isRPC: true
    });
  }
};

export const consumeCustomers = async (subdomain, doc, action) => {
  const updateCode = action === 'delete' ? doc.code : doc.No.replace(/\s/g, '');

  const company = await sendContactsMessage({
    subdomain,
    action: 'companies.findOne',
    data: { code: updateCode },
    isRPC: true,
    defaultValue: {}
  });

  if ((action === 'update' && doc.No) || action === 'create') {
    const document: any = {
      primaryName: doc?.Name || 'default',
      code: doc.No,
      primaryPhone: doc?.Mobile_Phone_No,
      phones: [doc?.Phone_No],
      location: doc?.Country_Region_Code === 'MN' ? 'Mongolia' : '',
      businessType: doc?.Partner_Type === 'Person' ? 'Customer' : 'Partner'
    };

    if (company) {
      await sendContactsMessage({
        subdomain,
        action: 'companies.updateCompany',
        data: { _id: company._id, doc: { ...document } },
        isRPC: true
      });
    } else {
      await sendContactsMessage({
        subdomain,
        action: 'companies.createCompany',
        data: { ...document },
        isRPC: true
      });
    }
  } else if (action === 'delete' && company) {
    await sendContactsMessage({
      subdomain,
      action: 'companies.removeCompanies',
      data: { _ids: [company._id] },
      isRPC: true
    });
  }
};
