import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloPerson from './components/HelloPerson';
import Header from './components/Header';
import Hi from './components/Hi'
import Car from './components/Car';
import Login from './components/Login';
function App() {
  return (
    <>
      <Header />
      <Hello />
      <HelloPerson name={'Phạm Tuấn Vũ'} />
      <Hi /> <br></br>
      <Car />
      <Login />
    </>
  );
}

export default App;
