import '../App.css'


const Skills = () => {
    return (
        <div className="skills bg-[#292e33] lg:block hidden" id="skills">
      <div className="main-text">
         <h1 className='text-white text-3xl font-bold pt-7 text-center'>Technical and Professional</h1>
      </div>

    <div className="skill-main ">
        <div className="skill-left">
            <h3>Technical Skills</h3>
            <div className="skill-bar">
                <div className="info">
                    <p>HTML</p>
                    <p>88%</p>
                </div>
                <div className="bar">
                    <span className="html"></span>
                </div>
            </div>

            <div className="skill-bar">
                <div className="info">
                    <p>CSS</p>
                    <p>80%</p>
                </div>
                <div className="bar">
                    <span className="css"></span>
                </div>
            </div>

            <div className="skill-bar">
                <div className="info">
                    <p>Tailwind</p>
                    <p>85%</p>
                </div>
                <div className="bar">
                    <span className="bootstrap"> </span>
                </div>
            </div>

            <div className="skill-bar">
                <div className="info">
                    <p>Java-script</p>
                    <p>70%</p>
                </div>
                <div className="bar">
                    <span className="java-script"></span>
                </div>
            </div>
            
        </div>
    </div>
  </div>
    );
};

export default Skills;