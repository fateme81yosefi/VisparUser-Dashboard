import { useState } from 'react';

interface ApiResponsePeriod {
  errorPeriod: string;
  dataPeriod: object;
}


interface ApiResponseSupervisor {
    errorSupervisor: string;
    dataSupervisor: object;
  }

  
  
interface ApiResponseEmployee {
    errorEmployee: string;
    dataEmployee: object;
  }

  
function AssignmentSupervieorGetData() {
  const [errorPeriod, setErrorPeriod] = useState('');
  const [errorSupervisor, setErrorSupervisor] = useState('');
  const [errorEmployee, setErrorEmployee] = useState('');

  const [dataPeriod, setDataPeriod] = useState<object[]>([]);
  const [dataSupervisor, setDataSupervisor] = useState<object[]>([]);
  const [dataEmployee, setDataEmployee] = useState<object[]>([]);

  const token = localStorage.getItem('tokenUser');

  const getAdminPeriodListData = async () => {
    try {
      const headers = new Headers();
      if (token) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer' + token);
      }

      const response = await fetch('https://mqtt-broker.ir/api/employee/period/', {
        method: 'GET',
        headers: headers,
      });

      const dataPeriod: ApiResponsePeriod= await response.json();

      if (response.ok) {
        setDataPeriod(dataPeriod.data);
        setErrorPeriod('');
      } else {
        setErrorPeriod(response.statusText);
      }
    } catch (error) {
        setErrorPeriod('خطا در ارتباط با سرور');
    }
  };




  return {
    errorPeriod,
    dataPeriod,
    getAdminPeriodListData,
  };
}

export default AssignmentSupervieorGetData;