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
import useStore from '../../hooks/UseStore';
import GetEmployeeList from '../../hooks/Employee/GetEmployeeList/GetEmployeeList';
import CustomButton from '../../components/CustomeBtn/CustomBtn';
import CustomInput from '../../components/CustomInput/CustomInput';
import { DatePicker } from '@react-shamsi/datepicker';


//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------

const Employee: React.FC = () => {
    const {
        dataPeriod,
        errorPeriod,
        getAdminPeriodListData,
    } = AssignmentSupervieorGetData();

    const { errorEmployeeList, dataEmployeeList, getEmployeeListData } = GetEmployeeList()

    const [period, setPeriod] = useState<string | null>();
    const [selected, setSelected] = useState([]);
    const [dataShow, setDataShow] = useState<object[] | null>([]);
    const [showErrorTimer, setShowErrorTimer] = useState(false);
    const { dataMe, dataPeriodList, setDataPeriodList } = useStore();
    const [emptyError, setEmptyError] = useState(false);

    const [eventModal, setEventModal] = useState(false);
    const [eventDate, seteventDate] = useState('');
    const [eventDate_persian, seteventDate_persian] = useState('');
    const [adminDesc, setadminDesc] = useState<string | null>();
    const [employeeDesc, setemployeeDesc] = useState<string | null>();
    const [status, setStatus] = useState<number | null>();

    //----------------------------------------------------------------------------------------------------

    const handleShowList = () => {
        if (period && dataMe) {
            console.log("kjbhjjh")
            getEmployeeListData(dataMe.id, period);
        }
    };
    //----------------------------------------------------------------------------------------------------


    useEffect(() => {
        const fetchData = async () => {
            await getAdminPeriodListData()
        }
        fetchData()

    }, []);


    useEffect(() => {
        setDataPeriodList(dataPeriod)
    }, [dataPeriod]);


    useEffect(() => {
        setDataShow(dataEmployeeList)
    }, [dataEmployeeList]);


    useEffect(() => {
        if (errorPeriod) {
            setShowErrorTimer(true);
            const timer = setTimeout(() => {
                setShowErrorTimer(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [errorPeriod]);


    //-------------------------------------------------------------------------------


    const [selectedOptions, setSelectedOptions] = useState<{ select1: OptionType | null; }>({ select1: null });

    const handleChange = (selectName: 'select1') => (option: OptionType | null) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [selectName]: option,
        }));
    };


    const handleDateChange = (selectedDate: any, set: (value: string) => void, setPersian: (value: string) => void) => {
        const formattedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
        set(formattedDate);
        setPersian(selectedDate.toLocaleDateString('fa-IR'));
    };

    //--------------------------------------------------------------------------------

    return (
        <>
            {showErrorTimer && errorPeriod &&
                <Error myError={"در درلیافت لیست!"} />
            }


            <Breadcrumb />
            {eventModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  text-sm">
                        <div className="relative my-6 mx-auto w-1/3">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-zinc-200 rounded-t">

                                    {showErrorTimer && emptyError && <Error myError={"لطفا همه فیلد ها را پر کنید!"} />}

                                    <h3 className="text-xl font-semibold">ثبت رویداد</h3>


                                    <button className="" onClick={() => setEventModal(false)}>
                                        <img src={closeIcon} />
                                    </button>
                                </div>
                                <div className="relative px-6 py-3 flex-auto text-right">

                                </div>
                                <div className="relative px-6 py-3 flex-auto text-right">
                                    <label className="mb-0.5 block text-black dark:text-white">
                                        تاریخ رویداد
                                    </label>

                                    <div className="flex relative flex-row-reverse text-center justify-center items-center setting-widthDP">
                                        <DatePicker
                                            value={eventDate_persian}
                                            dateFormat="yyyy-MM-dd"
                                            onChange={(selectedDate) => handleDateChange(selectedDate, seteventDate, seteventDate_persian)}
                                        />
                                    </div>

                                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <CustomSelect
                                                label="وضعیت ارزیابی"
                                                options={[
                                                    { value: 1, label: 'نقطه قوت' },
                                                    { value: 2, label: 'فرصت بهبود' },
                                                ]}
                                                value={gender}
                                                onChange={setGender}
                                            />

                                        </div>

                                        <CustomInput label="توضیحات ادمین"
                                            value={adminDesc}
                                            onChange={setadminDesc}
                                            placeholder="توضیحات ادمین  را وارد کنید" />

                                        <CustomInput label="توضیحات کارمندان"
                                            value={employeeDesc}
                                            onChange={setemployeeDesc}
                                            placeholder="توضیحات کارمندان  را وارد کنید" />
                                    </div>
                                    <div className="relative px-6 py-3 flex-auto text-right">

                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-zinc-200 rounded-b">

                                        <CustomButton
                                            onClick={() => {
                                                setEventModal(false)

                                            }}
                                            className="text-red-500 font-bold background-transparent"
                                        >
                                            بستن
                                        </CustomButton>

                                        <CustomButton
                                            onClick={() => { }
                                            }
                                            className="btnCustmColor"
                                        >
                                            افزودن دوره
                                        </CustomButton>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div></div>
                </>

            )}

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm	">
                <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-2/3">
                            <div>
                                <label className="mb-0.5 block text-black dark:text-white">
                                    دوره
                                </label>

                                <SearchableSelect
                                    options={dataPeriodList.map((item: any) => ({
                                        label: item.name,
                                        value: item.id
                                    }))}
                                    value={selectedOptions.select1}
                                    onChange={(option) => { handleChange('select1')(option); setPeriod(option?.value) }}
                                    myPlaceHolder="دوره"
                                    myClass="selected-field"
                                />

                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleShowList()}
                            className="flex mt-4.5 mb-4.5 w-full xl:w-1/3 justify-center rounded  p-3 font-medium text-gray hover:bg-opacity-90 bg-teal-400	"
                        >
                            نمایش
                        </button>

                    </div>



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
                                                                        className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-1/6"
                                                                    >
                                                                        نام
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-1/6"
                                                                    >
                                                                        ایمیل
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-1/6"
                                                                    >
                                                                        عنوان
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-1/6"
                                                                    >
                                                                        شماره همراه
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="px-6 py-3 text-start text-l font-medium text-gray-500 uppercase dark:text-neutral-500 w-1/6"
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
                                                                        <td className="px-6 py-4 flex flex-row justify-center align-center whitespace-nowrap text-end text-sm font-medium border-zinc-200">
                                                                            <button
                                                                                className="inline-flex items-center justify-center rounded-md bg-sky-400	 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 ml-2"
                                                                                type="button"
                                                                                onClick={() =>
                                                                                    setEventModal(true)
                                                                                }
                                                                            >
                                                                                ثبت رویداد
                                                                            </button>

                                                                            <button
                                                                                className="inline-flex items-center justify-center rounded-md bg-indigo-500	 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 ml-2"
                                                                                type="button"
                                                                                onClick={() => {
                                                                                }}
                                                                            >
                                                                                امتیازدهی
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>


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
        </>
    )

    export default Employee;
