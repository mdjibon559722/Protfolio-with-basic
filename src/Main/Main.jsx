import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='bg-[#250821]'>
            <div className=''>
            <Navbar></Navbar>

            </div>

            <div className=''>
             <Outlet></Outlet>
             </div> 
             <Footer></Footer>
        </div>
    );
};

export default Main;