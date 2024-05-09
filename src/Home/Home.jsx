import AboutMe from "../AboutMe/AboutMe";
import "../App.css"
import Services from "../Services/Services";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <div className="Home  lg:flex block lg:px-44 px-12 pt-12 h-full">
            <div className="home-content ">
                <h1>Hi! I'm Jibon Akando</h1>
                <div className="change-text">
                    <h3>And I'm A</h3>
                    <h3>
                        <span className="word">Student,</span>
                        <span className="word">Web Designer,</span>
                        <span className="word">Web Developer,</span>
                        <span className="word">Graphics Designer.</span>
                    </h3>
                </div>
                <p>
                    Web Design and Graphics Designer working in design field for 3years so far. Specialized in web Developer.
                </p>

                <div className="info-box mb-3">
                    <div className="email-info">
                        <h5>Email:</h5>
                        <a href="">mdjibonakando559722@gmail.com</a>
                    </div>
                </div>

                <div className="btn-box">
                    <a href="#" className="btn">Download CV</a>
                    <a href="#" className="btn">Hire Me Now</a>
                </div>

                <div className="social-icon">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-square-youtube"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""> <i className="fa-brands fa-instagram"></i></a>
                </div>

            </div>
            <div className="home-image">
                <div className="img-box sm:block">
                    <img src="/Image/home.png" alt="img"/>
                </div>
            </div>
        </div>
        <div className="">
        <AboutMe></AboutMe>

        </div>
        <div className="lg:p-24 p-6">
        <Services></Services>

        </div>

        <div>
            <Skills></Skills>
        </div>
        </div>
       
    
    );
};

export default Home;