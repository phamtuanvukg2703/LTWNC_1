function Hi() {
    const hiAll = () => {
        alert("hello everyone")
    }
    const hiYou = (name) => {
        alert("Hello " + name)
    }
    return (
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou("Vu")}>Hi you</button>
        </span>

    )
}
export default Hi;
