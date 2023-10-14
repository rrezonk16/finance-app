
import AccountBilance from './Components/Bilance/AccountBilance';
import Cards from './Components/Bilance/Cards';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; // Import Router components
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Bilance/Card';
import Transfer from './Components/Transfer/Transfer';
import AddBank from './Components/AddBank/AddBank';


const routes = [
  {
    path: "/",
    element: <AccountBilance />,
  },
  {
    path: "/cards/",
    element:<Cards/>,
  },
  {
    path: "/card/:id",
    element:<Card/>,
  },
  {
    path:"/transfer",
    element:<Transfer/>
  },
  {
    path:"/add-bank",
    element:<AddBank/>
  },
  {
    path:"/*",
    element:<h1>404 not found</h1>
  }

];
function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your App component with Router */}
      <div className="App">
        <Navbar />

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
