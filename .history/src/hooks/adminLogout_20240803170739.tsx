import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string;
}

function useLogout() {
  const [loading, setLoading] = useState(false);
  const [errorloggedout, setError] = useState('');
  const [loggedout, setloggedout] = useState(false);

  const logout = async (phone_number: string, password: string) => {
    setLoading(true);
    const token = localStorage.getItem('tokenUser');
    const headers = new Headers();

    try {
      const response = await fetch('https://mqtt-broker.ir/api/employee/login'), {
        if(token) {
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
          headers.append('Authorization', 'Bearer' + token);
        
      

      const data: LoginResponse = await response.json();

      if (response.ok) {
        localStorage.setItem('tokenUser', data.token);
        setloggedout(true);
        setError('');
        window.location.href = '/';
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return { errorloggedout, loggedout, logout };
}

export default useLogout;

