import { restOptions, setRestOptions, handleResponse } from "./helper";

const prefix = `api/rooms`;

const getAllUsersByRoom = async (roomId: string) => {
  const options = setRestOptions(restOptions.get);
  const res = await fetch(`${prefix}/${roomId}/users`, options);
  return handleResponse(res);
};

export { getAllUsersByRoom };