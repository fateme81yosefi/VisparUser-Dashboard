import { useState } from 'react';
import useStore from '../hooks/UseStore';

interface ApiResponse {
  error: string;
  data: object;
}

function useAdminApi() {
  const [error, setError] = useState('');
  const [data, setData] = useState<object[]>([]);
  const token = localStorage.getItem('tokenUser');
  const {dataMe, setDataMe, errorMe, setErrorMe } = useStore();

  const create = async () => {
    try {
      const headers = new Headers();
      if (token) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer' + token);
      }

      const response = await fetch('https://mqtt-broker.ir/api/employee/me', {
        method: 'GET',
        headers: headers,
      });

      const data: ApiResponse = await response.json();
      setDataMe(data.data);
      setData(data.data)

      if (response.ok) {
        setError('');
        setErrorMe('')
      }
      if (response.status === 401) {
        window.location.href = '/login';
      } else {
        setErrorMe(response.statusText);
      }
    } catch (error) {
      setDataMe('خطا در ارتباط با سرور');
      set
    }
  };

  return { data, error, create };
}

export default useAdminApi;
