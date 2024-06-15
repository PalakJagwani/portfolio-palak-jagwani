function Intro(){
    return(
        <div className=" flex flex-col md:flex-row shadow-lg shadow-black md:h-[80vh] mx-4 md:mx-0">
            <div className=" bg-dark_pastel md:w-[35%] h-[100%] md:pl-16 pl-6 py-5">
                <h1 className = " text-gray text-4xl font-semibold font-serif md:pt-48 pb-3 pt-10">Hello,</h1>
                <p className="font-bold text-6xl font-serif">I'm Palak</p>
                <p className=" font-serif pt-3 font-semibold">A Mern Stack Developer from <br />Pune, India</p>
                <a className=" border border-black py-4 px-14 text-sm mt-5 inline-block" href="#contact">Contact Me</a>
            </div>
            <div className="md:w-[65%] bg-light_pastel h-[100%] py-20 px-16">
                <div className=" ">
                    <h2 className="text-4xl font-semibold font-serif pb-6 text-dark_pastel">About Me</h2>
                    <p className=" text-lg">Welcome to my corner of the web! I'm Palak, a passionate web developer with a keen interest in MERN Stack Development. I thrive on applying my skills and enthusiasm to real-world projects, bringing ideas to life through code.As a self-driven and meticulous BCA undergraduate at Tilak Maharashtra Vidyapeeth in Pune, Maharashtra, I am committed to honing my craft and staying ahead in the ever-evolving tech landscape. My proficiency spans multiple programming languages, including JavaScript and Java, and I have hands-on experience in full-stack development.Explore my portfolio to see how I combine creativity and technical expertise to deliver innovative solutions!</p>
                </div>
                <div className=" mt-14 flex flex-col md:flex-row justify-between">
                    <div>
                        <h2 className="text-4xl font-semibold font-serif pb-6 text-dark_pastel">Social Links</h2>
                        <div className=" mb-2">
                            <i className="fa-brands fa-linkedin-in fa-lg " style={{color: "#525252"}}></i>
                            <a href="https://www.linkedin.com/in/palak-jagwani-60a7bb270" className=" ml-6">palak-jagwani</a>
                        </div>
                        <div>
                            <i className=" my-4 fa-brands fa-github fa-lg " style={{color: "#000000"}}></i>
                            <a href="https://github.com/PalakJagwani" className=" ml-6">PalakJagwani</a>
                        </div>
                    </div>
                    <div className ="mt-5 md:mt-0 flex justify-around">
                        <a href = "#my_skills" className="border border-black py-3 px-5 text-sm mt-5 inline-block mx-3 md:mt-20">View Skills</a>
                        <a href = "#my_projects" className="border border-black py-3 px-5 text-sm mt-5 inline-block md:mt-20">View Projects</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro