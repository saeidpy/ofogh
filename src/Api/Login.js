const login = async () => {
  const { data } = await fetch(process.env.server_url);
  return data;
};
const register = async () => {
  const { data } = await fetch(process.env.server_url);
  return data;
};

export { login, register };
