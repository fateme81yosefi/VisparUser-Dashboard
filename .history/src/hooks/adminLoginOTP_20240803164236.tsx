import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string;
}

function useLoginOTP() {
  const [errorOTP, setError] = useState('');
  const [loggedInOTP, setLoggedIn] = useState(false);
  const [otpCodeVerify, setLoggedIn] = useState(false);


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

      if (response.ok) {
        localStorage.setItem('tokenUser', data.token);
        setLoggedIn(true);
        setError('');
      } else {
        switch (response.status) {
          case 425:
            setError("برای درخواست مجدد کد 3 دقیقه صبر کنید");

            break;

          case 422:
            setError("خطایی رخ داده لطفا مجددا تلاش کنید");

            break;

          default:
            break;
        }
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    }
  };

  const loginOTPCode = async (code: number) => {

    try {
      const response = await fetch('https://mqtt-broker.ir/api/employee/otp-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        localStorage.setItem('tokenUser', data.token);
        setLoggedIn(true);
        setError('');
      } else {
        switch (response.status) {
          case 425:
            setError("برای درخواست مجدد کد 3 دقیقه صبر کنید");

            break;

          case 422:
            setError("خطایی رخ داده لطفا مجددا تلاش کنید");

            break;

          default:
            break;
        }
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    }
  };

  return { errorOTP, loggedInOTP, loginOTP ,loginOTPCode};
}

export default useLoginOTP;

