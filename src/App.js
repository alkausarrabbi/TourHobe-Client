import { BrowserRouter as HashRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Home/About/About';
import AddPackages from './Components/Home/AddPackages/AddPackages';
import Bookings from './Components/Home/Bookings/Bookings';
import Branch from './Components/Home/Branch/Branch';
import Details from './Components/Home/Details/Details';
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import Mybooking from './Components/Home/MyBooking/Mybooking';
import NotFound from './Components/Home/NotFound/NotFound';
import SignUP from './Components/Home/SignUP/SignUP';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <HashRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/home/packages/:id">
       <Details></Details>
      </Route>
      <Route exact path="/login">
       <Login></Login>
      </Route>
      <PrivateRoute exact path="/bookings">
       <Bookings></Bookings>
      </PrivateRoute>
      <PrivateRoute exact path="/addpackages">
       <AddPackages></AddPackages>
      </PrivateRoute>
      <PrivateRoute exact path="/mybooking">
      <Mybooking></Mybooking>
      </PrivateRoute>
      <PrivateRoute exact path="/branch">
      <Branch></Branch>
      </PrivateRoute>
      <Route exact path="/signup">
      <SignUP></SignUP>
      </Route>
      <Route exact path="/aboutus">
      <About></About>
      </Route>
      <Route exact path="/*">
        <NotFound></NotFound>
      </Route>
      </Switch>
      <Footer></Footer>
      </HashRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
