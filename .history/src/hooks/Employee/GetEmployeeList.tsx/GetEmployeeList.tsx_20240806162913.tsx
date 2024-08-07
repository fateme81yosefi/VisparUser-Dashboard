import { useState } from 'react';

interface ApiResponse {
    error: string;
    data: object;
}

function GetEmployeeList() {
    const [errordataEmployeeList, setError] = useState('');
    const [dataEmployeeList, setData] = useState<object[]>([]);
    const token = localStorage.getItem('tokenUser');

    const getEmployeeListData = async (supervisor_id: string, period_id: string) => {
        try {
            const headers = new Headers();
            if (token) {
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
                headers.append('Authorization', 'Bearer' + token);
            }

            const response = await fetch(
                'https://mqtt-broker.ir/api/employee/supervisor-employee-list/',
                {
                    method: 'GET',
                    headers: headers,
                    body: JSON.stringify({ supervisor_id, period_id }),
                },
            );

            const data: ApiResponse = await response.json();

            if (response.ok) {
                setData(data.data);
                setError('');
            } else {
                setError(response.statusText);
            }
        } catch (error) {
            setError('خطا در ارتباط با سرور');
        }
    };

    return { errorEmployeeList, dataEmployeeList, getEmployeeListData };
}

export default GetEmployeeList;
