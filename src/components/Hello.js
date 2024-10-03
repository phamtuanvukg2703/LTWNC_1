
function Hello() {
    const person = {
        name: 'Peter',
        theme: {
            backgroundColor: 'green',
            color: 'white'
        }
    }
    return (
        <div style={person.theme}>
            <h1>Xin chào: {person.name}</h1>
            <div> Chúc bạn thành công với React</div>
        </div>
    );
}
export default Hello;