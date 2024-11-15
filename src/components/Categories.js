import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    // Hàm fetch dữ liệu từ API

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/get-all-nhom');
                setCategories(response.data.Nhom);
            } catch (error) {
                console.error('Error fetching data:', error);
                // setCategories([]);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Tên nhóm</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((e) => (
                        <tr key={e.idnhom}>
                            <th scope="row">{e.idnhom}</th>
                            <td>{e.ten}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}