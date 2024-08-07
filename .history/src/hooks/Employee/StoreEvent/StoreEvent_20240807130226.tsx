import { useState } from 'react';

interface ApiResponse {
  error?: string;
  doneStoreEvent?: string;
}

function StoreEvent() {
  const [errorstore, setError] = useState('');
  const [doneStoreEvent, setdoneStoreEvent] = useState('');

  const token = localStorage.getItem('tokenUser');

  const StoreEventEmployee = async (
    event_date:Date,
    admin_description:string,
    employee_description:string,
    evaluation_indicators_id:string,
    evaluation_status:string,
    supervisor_id: number,
    period_id: number,
    employee_id: number,
  ) => {
    try {
      const headers = new Headers();
      if (token) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
      }

      const response = await fetch(
        'https://mqtt-broker.ir/api/employee/supervisor-employee-event/',
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            event_date,
            admin_description,
            employee_description,
            evaluation_indicators_id,
            evaluation_status,
            supervisor_id,
            period_id,
            employee_id,
          }),
        },
      );

      const data: ApiResponse = await response.json();

      if (response.ok) {
        setError('');
        setdoneStoreEvent('عملیات با موفقیت انجام شد.');
      } else {
        setError(data.error || response.statusText);
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
      console.error(error);
    }
  };

  return { errorstore, doneStoreEvent ,StoreEventEmployee};
}

export default StoreEvent;
