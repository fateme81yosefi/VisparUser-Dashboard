import { useState } from 'react';
import useStore from '../UseStore';

interface ApiResponsePeriod {
  errorPeriod: string;
  dataPeriod: object;
}

  
function AssignmentSupervieorGetData() {
  const [errorPeriod, setErrorPeriod] = useState('');
  const [dataPeriod, setDataPeriod] = useState<object[]>([]);

  const token = localStorage.getItem('tokenUser');

  const { setDataPeiodList } = useStore();

  
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
        setDataPeiodList(dataPeriod.data)
        
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
