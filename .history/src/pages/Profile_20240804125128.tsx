import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CustomInput from '../components/CustomInput/CustomInput';
import useStore from '../hooks/UseStore';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link } from 'react-router-dom';

const Profile = () => {

  const { dataMe, setDataMe, errorMe, setErrorMe } = useStore();

  return (
    <>
      <Breadcrumb />


      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
        <div>
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="نام و نام خانوادگی"
                  value={dataMe.full_name}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="کد پرسنلی"
                  value={dataMe.personnel_code}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <CustomInput
                  label=" جنسیت "
                  value={dataMe.gender}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="ایمیل "
                  value={dataMe.email}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="شماره همراه"
                  value={dataMe.gender}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="عنوان شغلی"
                  value={dataMe.email}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>

          </div></div>
      </div>

    </>
  );
};

export default Profile;
