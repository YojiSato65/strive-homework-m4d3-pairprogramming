
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from "./components/WarningSign.jsx"
import MyBadge from "./components/MyBadge"

function App()
{
  return (
    <div>
      <WarningSign message='Hello, new message!' />
      <MyBadge text='hello' color='primary' />
    </div>
  );
}

export default App;
