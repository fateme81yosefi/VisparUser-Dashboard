import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CustomInput from '../components/CustomInput/CustomInput';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Breadcrumb />

   

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="نام و نام خانوادگی"
                  value={"فاطمه یوسفی"}
                  onChange={()=>{}}
                  placeholder="نام و نام خانوادگی را وارد کنید"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="کد پرسنلی"
                  value={"99999999"}
                  onChange={()=>{}}
                  placeholder="کد پرسنلی را وارد کنید"
                />
              </div>
            </div>
       
    </>
  );
};

export default Profile;
