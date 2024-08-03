


import { useState } from 'react';

interface ApiResponseListBasePeriod {
  errorBasedPeriod: string;
  dataBasedPeriod: object;
}

interface ApiResponseListBasePeriodSupervisor {
  errorBasedSupervisor: string;
  dataBasedSupervisor: object;
}

function AssignmentSupervieorShow() {
  const [errorBasedPeriod, setErrorPeriod] = useState('');
  const [errorBasedSupervisor, setErrorSupervisor] = useState('');

  const [dataBasedPeriod, setDataBasedPeriod] = useState<object[]>([]);
  const [dataBasedSupervisor, setDataBasedSupervisor] = useState<object[]>([]);

  const token = localStorage.getItem('token');


  const getAdminSAShowbasedPeriodSupervisorEmployee = async (
    supervisor_id: number,
    period_id: number,
    employee_id: number,
  ) => {
    try {
      const headers = new Headers();
      if (token) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer' + token);
      }

      const response = await fetch(
        `https://mqtt-broker.ir/api/admin/supervisor-assignment/supervisor/${supervisor_id}/period/${period_id}`,
        {
          method: 'GET',
          headers: headers,
        },
      );

      const dataBasedSupervisor: ApiResponseListBasePeriodSupervisor =
        await response.json();

      if (response.ok) {
        setDataBasedSupervisor(dataBasedSupervisor.data);
        setErrorSupervisor('');
      } else {
        setErrorSupervisor(response.statusText);
      }
    } catch (error) {
      setErrorSupervisor('خطا در ارتباط با سرور');
    }
  };

  return {
    errorShow,
    getAdminSAShowbasedPeriodSupervisorEmployee,
  };
}

export default AssignmentSupervieorShow;

