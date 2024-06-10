function Skill({skill_img, skill_name}){
    return(
        <div className=" m-4 md:m-8 h-[8rem] w-[8rem] shadow-sm shadow-black flex flex-col justify-evenly bg-light_pastel">
            <img src={skill_img} alt="" className=" h-14 w-14 mx-auto"/>
            <p className="text-center font-bold">{skill_name}</p>
        </div>
    )
}

export default Skill