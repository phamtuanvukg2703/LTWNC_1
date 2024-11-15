import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/v1/get-all-sanpham");
                setProducts(response.data.sanpham);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Nhóm</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((e) => (
                        <tr key={e.masp}>
                            <th scope="row">{e.masp}</th>
                            <td>{e.idnhom}</td>
                            <td>{e.ten}</td>
                            <td>{e.gia}</td>
                            <td>{e.hinhanh}</td>
                            <td>{e.mota}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
