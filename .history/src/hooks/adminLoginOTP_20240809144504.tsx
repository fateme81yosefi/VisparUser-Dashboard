import { useState } from 'react';

interface LoginResponse {
  error: string;
  token: string;
}

function useLoginOTP() {
  const [errorcodeSend, setErrorcodeSend] = useState('');
  const [codeSend, setcodeSend] = useState(false);

  const [otpCodeVerify, setOtpCodeVerify] = useState(false);
  const [errorOTPCodeVerify, setErrorOTPCodeVerify] = useState('');



  const sendCode = async (phone_number: string) => {

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
        setcodeSend(true);
        setErrorcodeSend('');
      } else {
        switch (response.status) {
          case 425:
            setErrorcodeSend("برای درخواست مجدد کد 3 دقیقه صبر کنید");

            break;

          case 422:
            setErrorcodeSend("خطایی رخ داده لطفا مجددا تلاش کنید");

            break;

          default:
            break;
        }
      }
    } catch (error) {
      setErrorcodeSend('خطا در ارتباط با سرور');
    }
  };

  const verifyCode = async (code: string , phone_number:string) => {

    try {
      const response = await fetch('https://mqtt-broker.ir/api/employee/otp-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ code ,phone_number}),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        localStorage.setItem('tokenUser', data.token);

        setOtpCodeVerify(true);
        setErrorOTPCodeVerify('');

      } else {
        switch (response.status) {
          case 401:
            setErrorOTPCodeVerify("کد اشتباه است");
            break;

          case 402:
            setErrorOTPCodeVerify("کد منقضی یا استفاده شده است");
            break;

          default:
            setErrorOTPCodeVerify("خطایی رخ داده است! ");
            break;
        }
      }
    } catch (error) {
      setErrorOTPCodeVerify('خطا در ارتباط با سرور');
    }
  };

  return { errorcodeSend, codeSend, errorOTPCodeVerify, otpCodeVerify, sendCode, verifyCode };
}

export default useLoginOTP;

