import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CustomInput from '../components/CustomInput/CustomInput';
import useStore from '../hooks/UseStore';


const Profile = () => {

  const { dataMe, setDataMe, errorMe, setErrorMe } = useStore();
  
  const birthDate = new Date(dataMe.birth_date); // اطمینان از اینکه تاریخ به شیء Date تبدیل شده است
  const formattedDate = birthDate.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
  });

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

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="تاریخ تولد"
                  value={}
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
