function Footer(){
    return(
        <div className=" py-20 flex justify-between  flex-col md:flex-row px-16 bg-black text-light_pastel border-[10px] border-dark_pastel" id="contact">
            <div className=" my-auto w-[50%]">
                <h2 className=" text-white text-3xl font-bold pb-1">Get In Touch</h2>
                <p>Lets collaborate and make the web a better place.</p>
                <div>
                    <span></span>
                </div>
            </div>
            <div className="md:w-[50%] flex flex-col md:flex-row justify-evenly">
                <div className=" h-40 w-48 rounded-md bg-transparent shadow-sm shadow-dark_pastel flex flex-col justify-evenly my-4 md:my-0">
                    <i className="mx-auto fa-regular fa-envelope fa-2xl" style={{color: "#ddd0d1"}}></i>
                    <a href="mailto:jagwanipalak02@gmail.com" className=" text-sm mx-auto">jagwanipalak02@gmail.com</a>
                </div>
                <div className=" h-40 w-48 rounded-md bg-transparent shadow-sm shadow-dark_pastel flex flex-col justify-evenly">
                    <i className="fa-brands fa-linkedin-in fa-2xl mx-auto" style={{color: "#ddd0d1"}}></i>
                    <a href="https://www.linkedin.com/in/palak-jagwani-60a7bb270" className=" text-sm mx-auto">LinkedIn - PalakJagwani</a>
                </div>
            </div>
        </div>
    )
}

export default Footer