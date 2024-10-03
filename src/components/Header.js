import React from 'react'

function Item({ link, content }) {
    return (
        <li>
            <a href={link}>{content}</a>
        </li>
    )
}
function Menu({ url, text }) {
    return (
        <ul>
            <Item link={url} content={text} />
        </ul>
    )
}

export default function Header() {
    const list = [
        { text: "Trang chủ", url: "/" },
        { text: "Hehe", url: "huhu" },
        { text: "EEEEEEE", url: "AAAAAAA" }
    ]
    return (
        <>
            {
                list.map((e) => (
                    <Menu text={e.text} url={e.url} />
                ))
            }
        </>
    )
}
