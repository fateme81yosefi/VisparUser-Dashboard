import { useState } from 'react';

interface ApiResponse {
  error?: string;
}

function AdminPeriodUpdate() {
  const [errorupdate, setError] = useState('');
  const token = localStorage.getItem('tokenUser');

  const updatePeriod = async (
    name: string,
    id: string,
    start_date: Date,
    end_date: Date,
  ) => {
    try {
      const headers = new Headers();
      if (token) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
      }

      const response = await fetch(
        `https://mqtt-broker.ir/api/admin/period/${id}/update`,
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ name, start_date, end_date }),
        },
      );

      const data: ApiResponse = await response.json();

      if (response.ok) {
        setError('');
        window.location.href = '/period';
      } else {
        setError(data.error || response.statusText);
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
      console.error(error); 
    }
  };

  return { errorupdate, updatePeriod };
}

export default AdminPeriodUpdate;