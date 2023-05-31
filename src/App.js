
import './App.scss';
import Header from './components/Header/header';
import { Link } from "react-router-dom";
const App = () => {
  return (

    <div className="app-container">
      <Header />
      <div>
        test link
      </div>
      <button>
        <Link to="/users">
          go to User
        </Link>
      </button>
      <button>
        <Link to="/admins">
          go to Admin
        </Link></button>
    </div>
  );
}
export default App;
