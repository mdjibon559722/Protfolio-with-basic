import '../App.css'

const AboutMe = () => {
    return (
        <div className='about lg:flex justify-between py-20 px-6  bg-[#292e33]' id='aboutMe'>
             <div className="img-about lg:pl-36  lg:w-auto lg:h-auto   px-16" >
           <img src="/Image/jibon2.png" alt=""/>
       </div>
         <div className="about-content lg:pl-24">
             {/* <span>Let me introduce myself</span>  */}
             <div className=''>
             <h2>About Me</h2>
            <h3>A story of good</h3>
             </div>
            <p className=''>Hi, I am Jibon. I am a Student of CSE Department in Dhaka Polytechnic Institute. I am a Muslim. I live in Bangladesh. I am a web-designer,Graphics-designer,web-developer. Hard work is the key to success in life. SO I want to do everything to make myself efficient. Insha Allah I will be success One day.</p>
           <div className="btn-box">
                <a href="#" className="btn">Read More</a>
           </div>
        
            </div>
        </div>
    );
};

export default AboutMe;