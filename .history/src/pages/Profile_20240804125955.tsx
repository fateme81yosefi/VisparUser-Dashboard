import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CustomInput from '../components/CustomInput/CustomInput';
import useStore from '../hooks/UseStore';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link } from 'react-router-dom';

const Profile = () => {

  const { dataMe, setDataMe, errorMe, setErrorMe } = useStore();

  function gregorianToJalali(gy, gm, gd) {

    let g_days_in_month = [31, 28 + (isLeapYear(gy) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let gy2 = (gm > 2) ? (gy + 1) : gy;
    let days = 355666 + (365 * gy) + Math.floor(gy2 / 4) + gd;
    for (let i = 0; i < gm - 1; ++i) {
      days += g_days_in_month[i];
    }

    let jy = -1595 + Math.floor(days / 365.2421985815604);
    let jalali_days = days - getGregorianDays(jy);
    if (jalali_days < 0) {
      jy--;
      jalali_days = days - getGregorianDays(jy);
    }

    let jm;
    let jd;

    if (jalali_days < 186) {
      jm = 1 + Math.floor(jalali_days / 31);
      jd = jalali_days % 31 + 1;
    } else {
      jalali_days -= 186;
      jm = 7 + Math.floor(jalali_days / 30);
      jd = jalali_days % 30 + 1;
    }

    return `${jy + 621} /${jm < 10 ? '0' : ''}${jm}/${jd < 10 ? '0' : ''}${jd}`;
  }

  function getGregorianDays(year) {
    return (year * 365) + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  }

  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  const miladiDate = "2024-04-21";
  const [year, month, day] = miladiDate.split('-').map(Number);
  const shamsiDate = gregorianToJalali(year, month, day);
  console.log(shamsiDate); // خروجی: 1403/02/01

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
                  label=" جنسیت"
                  value={dataMe.gender}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="ایمیل"
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
                  value={dataMe.phone_number}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="عنوان شغلی"
                  value={dataMe.job_title}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="سطح سازمانی "
                  value={dataMe.organization_level_title}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="واحد سازمانی "
                  value={dataMe.organization_unit_title}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="تحصیلات  "
                  value={dataMe.education}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label=" وضعیت تحصیلات "
                  value={dataMe.education_relationship}
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
