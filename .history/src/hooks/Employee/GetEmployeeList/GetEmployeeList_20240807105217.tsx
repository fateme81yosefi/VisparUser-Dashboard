import { useState } from 'react';

interface ApiResponse {
    error: string;
    data: object;
}

function GetEmployeeList() {
    const [errorEmployeeList, setError] = useState('');
    const [dataEmployeeList, setData] = useState<object[]>([]);
    const token = localStorage.getItem('tokenUser');

    const getEmployeeListData = async (supervisor_id: string, period_id: string) => {


    };

    return { errorEmployeeList, dataEmployeeList, getEmployeeListData };
}

export default GetEmployeeList;
