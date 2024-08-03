export const isAuthenticated = (): boolean => {
  console.log(!!localStorage.getItem('tokenUser'))
  return !!localStorage.getItem('tokenUser');
};
