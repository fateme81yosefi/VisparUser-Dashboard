import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CustomInput from '../components/CustomInput/CustomInput';
import useStore from '../hooks/UseStore';


const Profile = () => {

  const { dataMe, setDataMe, errorMe, setErrorMe } = useStore();

  const convertToPersianDate = (date) => {
    const birthDate = new Date(date); // اطمینان از اینکه تاریخ به شیء Date تبدیل شده است
    const formattedDate = birthDate.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formattedDate
  }



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
                  value={convertToPersianDate(dataMe.birth_date)}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>

              <div className="w-full xl:w-1/2">
                <CustomInput
                  label="تاریخ شروع به کار"
                  value={convertToPersianDate(dataMe.employeement_date)}
                  onChange={() => { }}
                  placeholder=""
                />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div
                className="w-full xl:w-1/2"
                style={{ alignItems: 'center', display: 'flex' }}
              >
                <label
                  htmlFor="checkboxLabelOne"
                  className="flex cursor-pointer select-none items-center"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkboxLabelOne"
                      value={dataMe.is_supervisor}
                      className="sr-only"
                      onChange={() => {}}
                    />
                    <div
                      className={`ml-4 flex h-5 w-5 items-center justify-center rounded border ${isChecked &&
                        'border-primary bg-gray dark:bg-transparent'
                        }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-sm ${dataMe.is_supervisor && 'bg-primary'
                          }`}
                      ></span>
                    </div>
                  </div>
                  آیا ارزیابی کننده است؟
                </label>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Profile;
