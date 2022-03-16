
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from "./components/WarningSign.jsx"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import books from "./data/fantasy.json"

function App()
{
  return (
    <div>
      <WarningSign message='Hello, new message!' />
      <MyBadge text='ex.2' color='primary' />
      <SingleBook title={books[0].title} image={books[0].img} />
      <BookList title={books.title} img={books.img} />
    </div>
  );
}

export default App;
