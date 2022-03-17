
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from "./components/WarningSign.jsx"
import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList"
import books from "./data/fantasy.json"
import CommentArea from "./components/CommentArea"

function App()
{
  return (
    <div>
      <WarningSign message='Hello, new message!' />
      <MyBadge text='Ex.2' color='primary' />
      <BookList books={books} />
      <CommentArea />
    </div>
  );
}

export default App;
