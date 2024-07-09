
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
              {/* <Header></Header> */}
              <Navbar></Navbar>
              <Outlet></Outlet>
        </div>
    );
};

export default Main;    