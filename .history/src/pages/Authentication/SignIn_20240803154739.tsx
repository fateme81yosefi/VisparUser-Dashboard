import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorIcon from '/src/components/Icon/error.svg'
import LogoDark from '../../../public/73b98efb3ac343b48544a710e68c6dfe-600x315w.png';
import Logo from '../../../public/001_2XAE9J2L6B1UIZ1main.png';

import useLogin from '../../hooks/adminLogin';
import usePersianNumToEn from "../../hooks/usePersianNumToEn"

const SignIn: React.FC = () => {
  const { loading, error, loggedIn, login } = useLogin();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otpMode, setOtpMode] = useState(false);


  const handleLogin = async () => {
    await login(phoneNumber, password);
  };
  return (
    <>
      {error && (
        <div
          className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg bg-red-400 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <div className='inline-flex'>
          <img src={ErrorIcon} />
            <span className="font-medium">خطا! </span>
          </div>
          {error}
        </div>
      )}

      {loggedIn && (
        <div
          className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg bg-green-400 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <div className='inline-flex'>
          <img src={ErrorIcon} />
            <span className="font-medium ml-10">با موفقیت وارد شدید! </span>
          </div>
          {error}
        </div>
      )}

      <div className="rounded-sm	h-dvh	  bg-white   dark:bg-boxdark">
        <div className="flex flex-wrap items-center flex-col">
          <div className=" w-full xl:block xl:w-1/2 pt-6">
            <div className="text-center">
              <Link className="inline-block" to="/">
                <img className="hidden dark:block w-60" src={Logo} alt="Logo" />
                <img className="dark:hidden w-60" src={LogoDark} alt="Logo" />
              </Link>
            </div>
          </div>

          <div className="w-full  xl:w-2/5">
            <div className="w-full p-2 pt-0 sm:p-12.5 xl:p-17.5 xl:pt-0">
              <h2 className="mb-9 text-xl	 font-bold text-black dark:text-white">
                ورود به پنل کاربران ویسپار
              </h2>

           {
            otpMode?:
           }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
