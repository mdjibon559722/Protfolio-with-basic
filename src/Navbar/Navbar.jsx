import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
    const NavOptions = <>
        <li className="text-[#f5f5f5]"><a href='/'>Home</a></li>
        <li className="text-[#f5f5f5]"><a href="#aboutMe">AboutMe</a></li>
        <li className="text-[#f5f5f5]"><a href='#service'>Services</a></li>
        <li className="text-[#f5f5f5]"><a to='#skills'>Skills</a></li>
        <li className="text-[#f5f5f5]"><Link to='/contact'>Contact</Link></li>
        {/* <!-- <li><a href="#portfolio">Portfolio</a></li> --> */}
        <li className="text-[#f5f5f5]"><a href="#contact">Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="nav-list  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 bg-zinc-700 text-black">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-[#f5f5f5]"><span className="text-[#12f7ff] text-5xl NavJ">J</span>IBON</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="nav-list menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a  className="btn ">Hire Me</a>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;