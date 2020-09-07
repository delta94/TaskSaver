import { restOptions, setRestOptions, handleResponse } from "./helper";

const prefix = `api/organizations`;

const getOrganizationsService = async () => {
  const options = setRestOptions(restOptions.get);
  const res = await fetch(prefix, options);
  return handleResponse(res);
};

export { getOrganizationsService };