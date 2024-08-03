import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string; 
}

function useLoginOTP() {
  const [errorOTP, setError] = useState('');
  const [loggedInOTP, setLoggedIn] = useState(false);

  const loginOTP = async (phone_number: string) => {

    try {
      const response = await fetch('https://mqtt-broker.ir/api/employee/otp-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ phone_number }),
      });

      const data: LoginResponse = await response.json();
      console.log(response)

      if (response.ok) {
        localStorage.setItem('tokenUser', data.token);
        setLoggedIn(true);
        setError('');
      } else {
        switch (re) {
          case value:
            
            break;
        
          default:
            break;
        }
        setError(response.message);
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    } 
  };

  return { errorOTP, loggedInOTP, loginOTP };
}

export default useLoginOTP;

