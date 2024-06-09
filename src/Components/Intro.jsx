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
                    <p className=" text-lg">Welcome to my corner of the web! I'm Palak, a passionate web developer with strong enthusiasm for MERN Stack Development. I'm exited to apply my skills and enthusiasm in real-world projects.</p>
                    <p className=" text-lg ">I'm a self driven and meticulous BCA undergrad at Tilak Maharashtra Vidyapeeth, Pune Maharashtra.</p>
                    <p className=" text-lg ">I'm proficient in multiple programming languages like JavaScript, Java and have a development exprience in full stack Development.</p>
                </div>
                <div className=" mt-14">
                    <h2 className="text-4xl font-semibold font-serif pb-6 text-dark_pastel">Social Links</h2>
                    <div className=" mb-2">
                        <i className="fa-brands fa-linkedin-in fa-lg " style={{color: "#525252"}}></i>
                        <a href="https://www.linkedin.com/in/palak-jagwani-60a7bb270" className=" ml-6">palak-jagwani</a>
                    </div>
                    <div>
                        <i className=" my-4 fa-brands fa-github fa-lg" style={{color: "#000000"}}></i>
                        <a href="https://github.com/PalakJagwani" className=" ml-6">PalakJagwani</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro