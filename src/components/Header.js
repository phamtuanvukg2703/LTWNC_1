import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const list = [
        { text: "Trang chủ", url: "/" },
        { text: "Danh mục", url: "/category-product" },
        { text: "Sản phẩm", url: "/products" }
    ]
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            {
                                list.map((e) => (
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to={e.url}>{e.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
