
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from "./components/WarningSign.jsx"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"
import book from "./data/fantasy.json"

function App()
{
  return (
    <div>
      <WarningSign message='Hello, new message!' />
      <MyBadge text='hello' color='primary' />
      <SingleBook title={book[0].title} image={book[0].img}/>
    </div>
  );
}

export default App;
