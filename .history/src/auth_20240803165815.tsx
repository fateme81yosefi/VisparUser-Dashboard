export const isAuthenticated = (): boolean => {
  console.log()
    return !!localStorage.getItem('tokenUser');
  };
  