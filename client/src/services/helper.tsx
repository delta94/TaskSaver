const restOptions = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
};

const formTypes = {
  add: "Add",
  edit: "Edit"
};

const setRestOptions = (methodType: string, body?: any) => {
  return {
    method: methodType,
    headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${localStorage.token}` },
    body: JSON.stringify(body)
  };
};

const handleResponse = async (res: Response) => {
  const { status } = res;
  const errorCodes = [400, 401, 404, 500];
  const data = await res.json();

  if (errorCodes.includes(status)) {
    return { data, success: false };
  }

  return { data, success: true };
};

export { restOptions, formTypes, setRestOptions, handleResponse };