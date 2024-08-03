import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string; 
}

function useLogout() {
  const [loading, setLoading] = useState(false);
  const [errorloggedout, setError] = useState('');
  const [loggedout, setloggedout] = useState(false);

  const logout = async () => {
    setLoading(true);
    const token = localStorage.getItem('tokenUser');

    try {
      const response = await fetch('https://mqtt-broker.ir/api/employee/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        localStorage.removeItem("tokenUser");

        setloggedout(true);
        setError('');
        window.location.href = '/login'; 
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

