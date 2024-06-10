import {useParams} from 'react-router-dom'
import { projects_data } from '../Data'
import Footer from './Footer'

function ProjectView(){
    const {id} = useParams();

    let project = {}

    projects_data.map((data) => (
        data.id == id ? project = data : project
    ))

    return(
        <div className="w-[100vw] flex flex-col md:flex-row mx-auto md:pl-0 md:h-screen border-[4vh] md:border-[10vh] border-dark_pastel">
            <div className='md:w-[50%]'>
                <img src={project.project_img} className=" h-[20vh] w-[70vw] md:h-[40vh] md:w-[40vw] block mx-auto md:mt-[20%] mt-[5%] rounded-lg shadow-dark_pastel shadow-2xl" />
                <h2 className=' text-center font-bold text-3xl text-black my-[10%]'>{project.project_name}</h2>
            </div>
            <div className='md:w-[50%] pl-[10%] md:pl-0 pb-10'>
                <div className=' w-[80%] font-semibold md:mt-[20%] mt-[5%] md:mx-0'>
                    <h3 className=' text-xl'>Tech Stack : {project.tech_stack}</h3>
                    <div className=' mt-5 font-normal'><span className ="text-2xl font-semibold">Description : </span>{project.description}</div>
                </div>
                <h2 className=' mt-[10%] text-2xl font-semibold'>View it here..</h2>
                <ul className=' mt-[2%]'>
                    <li className = " overflow-scroll mr-[10%]">Github Link : <b>Client Side</b> : <a href={project.client_url}>{project.client_url}</a></li>
                    {project.server_url ? <li className = " overflow-scroll mr-[10%]">Github Link : <b>Server Side</b> : <a href={project.server_url}>{project.server_url}</a></li> : ""}
                    <li className='mt-2 overflow-scroll mr-[10%]'>Live Link : <a href={project.live_url}>{project.live_url}</a></li>
                </ul>
            </div>
        </div>
        // <a href={project.github_url}>{project.github_url}</a>
        
    )
}

export default ProjectView