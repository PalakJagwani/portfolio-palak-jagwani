import {NavLink} from 'react-router-dom'

function Project({id, project_name, tech_stack, project_img}){
    return(
        <NavLink className=" m-8 shadow-sm shadow-black bg-dark_pastel pt-4 rounded-md px-4 text-white min-h-64 max-h-64 font-semibold flex cursor-pointer flex-col justify-evenly" to={`/project-view/${id}`}>
            <img src={project_img} alt="" className=" w-[100%] h-[60%] rounded-md" />
            <div>
                <div>Project Name = {project_name}</div>
                <div>Tech stack = {tech_stack}</div>
            </div>
        </NavLink>
    )
}

export default Project