import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string; 
}

function useLoginOTP() {
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (phone_number: string, password: string) => {

    try {
      const response = await fetch('https://mqtt-broker.ir/api/employee/otp-login', {
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
        setLoggedIn(true);
        setError('');
        window.location.href = '/'; 
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    } 
  };

  return { error, loggedIn, login };
}

export default useLoginOTP;

