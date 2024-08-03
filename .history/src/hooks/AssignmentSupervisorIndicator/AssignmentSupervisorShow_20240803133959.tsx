


import { useState } from 'react';


interface ApiResponseListBasePeriodSupervisor {
  errorShow: string;
  dataItemShow: object;
}

function AssignmentSupervieorShow() {
  const [errorItemShow, setErrorSupervisor] = useState('');
  const [dataItemShow, setdataItemShow] = useState<object[]>([]);

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
        `https://mqtt-broker.ir/api/admin/evaluation-assignment/employee/${employee_id}/supervisor/${supervisor_id}/period/${period_id}/`,
        {
          method: 'GET',
          headers: headers,
        },
      );

      const dataItemShow: ApiResponseListBasePeriodSupervisor =
        await response.json();

      if (response.ok) {
        setdataItemShow(dataItemShow.data);
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

