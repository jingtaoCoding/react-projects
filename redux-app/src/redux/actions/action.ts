export const changeUsersName = (name: string) => {
  return {
    type: "CHANGEUSERNAME",
    payload: name,
  };
};