import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string; 
}

function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loggedout, setloggedout] = useState(false);

  const logout = async (phone_number: string, password: string) => {
    setLoading(true);

    try {
      const response = await fetch('https://mqtt-broker.ir/api/employee/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ phone_number, password }),
      });

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

  return { loading, error, loggedout, logout };
}

export default useLogout;

