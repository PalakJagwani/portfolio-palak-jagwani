import { skills_data } from "../Data"
import {Skill} from "../Components/index"

function Skills(){
    return(
        <div className=" my-24 md:mx-20">
            <h1 className=" text-4xl font-bold text-center">My SkillSet</h1>
            <div className=" flex flex-wrap my-10 justify-center">
                {skills_data.map((skill) => (
                    <Skill key={skill.id} skill_img={skill.skill_img} skill_name={skill.skill_name} />
                ))}
            </div>
        </div>
    )
}

export default Skills