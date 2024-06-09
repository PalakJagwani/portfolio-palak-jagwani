import { projects_data } from "../Data"
import {Project} from '../Components/index'

function Projects(){
    return(
        <div className=" my-24 md:mx-20 mx-2">
            <h2 className=" text-4xl font-bold text-center">My Projects</h2>
            <div className=" grid lg:grid-cols-3 grid-cols-1 my-10">
                {
                    projects_data.map((project) => (
                        <Project key={project.id} id={project.id} project_name = {project.project_name} tech_stack = {project.tech_stack} project_img = {project.project_img}/>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Projects