
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from "./components/WarningSign.jsx"
import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList"
import fantasybooks from "./data/fantasy.json"

function App()
{
  return (
    <div>
      <WarningSign message='Hello, new message!' />
      <MyBadge text='ex.2' color='primary' />
      <BookList books={fantasybooks} />
    </div>
  );
}

export default App;
