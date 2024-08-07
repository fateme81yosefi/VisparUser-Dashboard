import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorIcon from '/src/components/Icon/error.svg'
import LeftIcon from '/src/components/Icon/left.svg'

import LogoDark from '../../../public/73b98efb3ac343b48544a710e68c6dfe-600x315w.png';
import Logo from '../../../public/001_2XAE9J2L6B1UIZ1main.png';

import useLogin from '../../hooks/adminLogin';
import usePersianNumToEn from "../../hooks/usePersianNumToEn"
import useLoginOTP from '../../hooks/adminLoginOTP';

const SignIn: React.FC = () => {
  const { loading, error, loggedIn, login } = useLogin();
  const { errorcodeSend, codeSend, errorOTPCodeVerify, otpCodeVerify, sendCode, verifyCode } = useLoginOTP();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState<string | null>("");

  const [password, setPassword] = useState('');
  const [otpMode, setOtpMode] = useState(false);

  const [showErrorTimer, setShowErrorTimer] = useState(false);


  const handleLogin = async () => {
    await login(phoneNumber, password);
  };

  const handleLoginOTP = async () => {
    await sendCode(phoneNumber);
  };

  const handleVerifyCode = async () => {
    await verifyCode(code, phoneNumber);
  };



  useEffect(() => {
    if (error||errorOTPCodeVerify , errorcodeSend , codeSend , otpCodeVerify , loggedIn) {
      setShowErrorTimer(true);
      const timer = setTimeout(() => {
        setShowErrorTimer(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [error,errorOTPCodeVerify , errorcodeSend , codeSend , otpCodeVerify , loggedIn]);




  return (
    <>
      {error && showErrorTimer && (
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

      {loggedIn && showErrorTimer && (
        <div
          className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg bg-green-400 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <div className='inline-flex'>
            <img src={ErrorIcon} />
            <span className="font-medium ml-10">با موفقیت وارد شدید! </span>
          </div>
        </div>
      )}






      {codeSend && showErrorTimer && (
        <div
          className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg bg-green-400 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <div className='inline-flex'>
            <img src={ErrorIcon} />
            <span className="font-medium ml-10">کد برای شماره همراه ارسال شد! </span>
          </div>
        </div>
      )}

      {errorcodeSend && showErrorTimer && (
        <div
          className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg bg-red-400 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <img src={ErrorIcon} />
          {errorcodeSend}
        </div>
      )}


      {errorOTPCodeVerify && showErrorTimer && (
        <div
          className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg bg-red-400 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <div className='inline-flex'>
            <img src={ErrorIcon} />
            <span className="font-medium ml-10">{errorOTPCodeVerify}</span>
          </div>
        </div>
      )}

      {otpCodeVerify && showErrorTimer && (
        <div
          className="flex fixed justify-between items-center p-4 mb-4 text-sm text-white rounded-lg bg-green-400 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <div className='inline-flex'>
            <img src={ErrorIcon} />
            <span className="font-medium ml-10"> "با موفقیت وارد شدید!" </span>
          </div>
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
                otpMode ?
                  <form>
                    <div className="mb-4">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        شماره همراه
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="شماره همراه خود را وارد کنید"
                          value={phoneNumber}
                          onChange={(e) => {
                            const convertedValue = usePersianNumToEn(e.target.value);
                            setPhoneNumber(convertedValue);
                          }}
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-custome focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-custome customizeDirectionPlaceholder border-custome"
                        />

                        <span className="absolute right-4 top-4">
                          <svg
                            className="fill-current"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.5">
                              <path
                                d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                                fill=""
                              />
                              <path
                                d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        رمز عبور
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="بیش از 8 کاراکتر "
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-custome focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-custome customizeDirectionPlaceholder border-custome"
                        />

                        <span className="absolute right-4 top-4">
                          <svg
                            className="fill-current"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.5">
                              <path
                                d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                                fill=""
                              />
                              <path
                                d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="mb-6 flex flex-row align-center">
                      <a onClick={() => setOtpMode(false)} className='customizeATag  ml-2'>  فراموشی رمز عبور</a><img onClick={() => setOtpMode(false)} src={LeftIcon} />
                    </div>

                    <div className="mb-5">
                      <input
                        type="button"
                        onClick={handleLogin}
                        value="ورود"
                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 btnCustmColor"
                      />
                    </div>
                  </form>
                  :
                  <form>
                    {
                      !loggedInOTP && <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                          شماره همراه
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="شماره همراه خود را وارد کنید"
                            value={phoneNumber}
                            onChange={(e) => {
                              const convertedValue = usePersianNumToEn(e.target.value);
                              setPhoneNumber(convertedValue);
                            }}

                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-custome focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-custome customizeDirectionPlaceholder border-custome"
                          />

                          <span className="absolute right-4 top-4">
                            <svg
                              className="fill-current"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.5">
                                <path
                                  d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                                  fill=""
                                />
                                <path
                                  d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                                  fill=""
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                    }

                    {
                      loggedInOTP && <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                          کد تایید
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="کد تایید را وارد کنید"
                            value={code}
                            onChange={(e) => {
                              const convertedValue = usePersianNumToEn(e.target.value);
                              setCode(convertedValue);
                            }}

                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none border-custome focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary customizeDirectionPlaceholder border-custome"
                          />

                          <span className="absolute right-4 top-4">
                            <svg
                              className="fill-current"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.5">
                                <path
                                  d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                                  fill=""
                                />
                                <path
                                  d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                                  fill=""
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                      </div>
                    }


                    <div className="mb-6 flex flex-row align-center">
                      <a onClick={() => setOtpMode(true)} className='customizeATag ml-2'>ورود با رمز عبور</a><img onClick={() => setOtpMode(false)} src={LeftIcon} />
                    </div>

                    <div className="mb-5">
                      {
                        !loggedInOTP &&
                        <input
                          type="button"
                          onClick={handleLoginOTP}
                          value="ارسال کد تایید"
                          className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 btnCustmColor"
                        />}
                      {
                        loggedInOTP &&
                        <input
                          type="button"
                          onClick={handleVerifyCode}
                          value="ورود با کد تایید"
                          className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 btnCustmColor"
                        />}

                    </div>
                  </form>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
