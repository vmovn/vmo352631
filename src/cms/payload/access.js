export const authenticated = ({ req }) => Boolean(req.user);

export const anyone = () => true;

export const publishedOrAuthenticated = ({ req }) => {
  if (req.user) return true;

  return {
    _status: {
      equals: "published",
    },
  };
};

export const authenticatedCollectionAccess = {
  create: authenticated,
  delete: authenticated,
  read: authenticated,
  update: authenticated,
};

export const publicDraftCollectionAccess = {
  create: authenticated,
  delete: authenticated,
  read: publishedOrAuthenticated,
  readVersions: authenticated,
  update: authenticated,
};

export const publicGlobalAccess = {
  read: anyone,
  update: authenticated,
};
