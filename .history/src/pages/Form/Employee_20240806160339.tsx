import React from 'react';
import { useEffect, useState } from 'react';
import "./SelectFields/SelectedFields.css"

//---------------------------------------------------------------------------------------------------
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import AssignmentSupervieorGetData from '../../hooks/AssignmentSupervisor/AssignmentSupervisorGetData';
import { MultiSelect } from 'react-multi-select-component';
import AssignmentSupervisorStore from '../../hooks/AssignmentSupervisor/AssignmentSupervisorStore';
import AssignmentSupervieorList from '../../hooks/AssignmentSupervisor/AssignmentSupervisorList';
import AssignmentSupervieorDelete from '../../hooks/AssignmentSupervisor/AssignmentSupervisorDelete';
import SearchableSelect from './SelectFields/SearchableSelect';
import CustomSelect from './SelectFields/CustomSelect';
import Error from '../../components/Error/Error';
import PrintIcon from '/src/components/Icon/print.svg'
import closeIcon from '/src/components/Icon/close.svg'
import deleteIcon from '/src/components/Icon/delete.svg'
import addIcon from '/src/components/Icon/add.svg'
import updateIcon from '/src/components/Icon/update.svg'

//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------

const Employee: React.FC = () => {
  const {
    errorPeriod,
    dataPeriod,
    getAdminPeriodListData,
  } = AssignmentSupervieorGetData();



  const [period, setPeriod] = useState<number | null>();
  const [selected, setSelected] = useState([]);
  const [dataShow, setDataShow] = useState<object[] | null>([]);
  const [showErrorTimer, setShowErrorTimer] = useState(false);

  //----------------------------------------------------------------------------------------------------



  const handleShowList = async () => {
    if (period) {
      await getAdminSAListbasedPeriod(period);
    } else if (period && supervisor && employementList.length == 0) {
      await getAdminSAListbasedPeriodSupervisor(supervisor, period);
    }
  };

  const handleDeleteItem = async (id: number) => {
    await getAdminSADeletebasedPeriodSupervisorEmployee(supervisor, period, id);
  };

  const handleDeleteBasedSelected = async () => {
    if (period && employementList.length == 0 && !supervisor) {
      await getAdminSADeletebasedPeriod(period);
    } else if (period && supervisor && employementList.length == 0) {
      await getAdminSADeletebasedPeriodSupervisor(supervisor, period);
    }
  };
  //----------------------------------------------------------------------------------------------------

  useEffect(() => {
    setDataShow(dataBasedPeriod);
  }, [dataBasedPeriod]);

  useEffect(() => {
    setDataShow(dataBasedSupervisor);
  }, [dataBasedSupervisor]);

  useEffect(() => {
    const fetchData = async () => {
      await getAdminPeriodListData();
      await getEmployeeListData();
      await getSupervisorListData();
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newEmployementList = selected.map((item) => parseInt(item.value));
    setEmployementList(newEmployementList);
  }, [selected]);

  useEffect(() => {
    if (errorPeriod || errorAdd || errorDelete ||errorSupervisor||errorEmployee) {
      setShowErrorTimer(true);
      const timer = setTimeout(() => {
        setShowErrorTimer(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [errorPeriod, errorAdd, errorDelete,errorSupervisor,errorEmployee]);


  //-------------------------------------------------------------------------------


  const [selectedOptions, setSelectedOptions] = useState<{
    select1: OptionType | null;
    select2: OptionType | null;
  }>({
    select1: null,
    select2: null,
  });

  const handleChange =
    (selectName: 'select1' | 'select2') => (option: OptionType | null) => {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [selectName]: option,
      }));
    };


  //--------------------------------------------------------------------------------

  return (
    <>
      {showErrorTimer && (errorSupervisor || errorPeriod || errorEmployee) &&
        <Error myError={"در درلیافت لیست!"} />
      }

      {showErrorTimer && (errorAdd || errorDelete) && (
        <Error myError={" عملیات موفقیت آمیز نبود!"} />
      )}

      <Breadcrumb  />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm	">
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <div>
                <label className="mb-0.5 block text-black dark:text-white">
                  دوره
                </label>

                <SearchableSelect
                  options={dataPeriod.map((item: any) => ({
                    label: item.name,
                    value: item.id
                  }))}
                  value={selectedOptions.select1}
                  onChange={handleChange('select1')}
                  myPlaceHolder="دوره"
                  myClass="selected-field"
                />

              </div>
            </div>

          </div>

          <button
            type="button"
            onClick={() => handleShowList()}
            className="flex mt-4.5 mb-4.5 w-full justify-center rounded  p-3 font-medium text-gray hover:bg-opacity-90 bg-teal-400	"
          >
            نمایش
          </button>

          {dataShow?.length !== 0 && (
            <div className="w-full max-w-full rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex flex-col gap-9 rounded-xl">
                <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <div className="flex flex-col">
                      <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                          <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-bg-zinc-200 dark:divide-bg-zinc-200 border-zinc-200">
                              <thead>
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-5/6"
                                  >
                                    نام
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-5/6"
                                  >
                                    ایمیل
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-5/6"
                                  >
                                    عنوان
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-5/6"
                                  >
                                    شماره همراه
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-5/6"
                                  >
                                    کد پرسنلی
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-1/6"
                                  >
                                    عملیات
                                  </th>
                                </tr>
                              </thead>

                              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 border-zinc-200">
                                {dataShow.map((item: any, index: number) => (
                                  <tr key={index} className="border-zinc-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 border-zinc-200">
                                      {item.full_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 border-zinc-200">
                                      {item.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 border-zinc-200">
                                      {item.job_title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 border-zinc-200">
                                      {item.phone_number}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 border-zinc-200">
                                      {item.personnel_code}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium border-zinc-200">
                                      <button
                                        className="inline-flex items-center justify-center rounded-md bg-red-100	 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 ml-2"
                                        type="button"
                                        onClick={() => {
                                          handleDeleteItem(item.id);
                                        }}
                                      >
                                        <img src={deleteIcon} />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            <button
                              type="button"
                              onClick={() => handleDeleteBasedSelected()}
                              className="flex mt-4.5 mb-4.5 w-full justify-center rounded  p-3 font-medium text-gray hover:bg-opacity-90 bg-red-400 "
                            >
                              حذف همه موارد{' '}
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {dataShow?.length == 0 && (
            <div>موردی برای نمایش جدول وجود ندارد!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Employee;
