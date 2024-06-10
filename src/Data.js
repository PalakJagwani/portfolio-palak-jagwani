import java from '../src/assets/java.png'
import html from '../src/assets/html.png'
import css from '../src/assets/css.png'
import javascript from '../src/assets/javascript.png'
import react from '../src/assets/react.jpg'
import express from '../src/assets/express.png'
import typescript from '../src/assets/typescript.png'
import node from '../src/assets/node.png'
import mongodb from '../src/assets/mongodb.jpg'
import sql from '../src/assets/sql.png'
import portfolio from '../src/assets/Portfolio.png'
import calculator from '../src/assets/Calculator.png'
import fetch from '../src/assets/github-fetching.png'
import password from '../src/assets/password.png'
import todo from '../src/assets/Todo.png'
import router from '../src/assets/Router.png'
import todoMern from '../src/assets/Todo-fullstack.png'
import blog from '../src/assets/blog.png'
import authform from '../src/assets/authform.png'

export const skills_data = [
    {
        id : 1,
        skill_img : java,
        skill_name : "Java"
    },
    {
        id : 2,
        skill_img : html,
        skill_name : "HTML"
    },
    {
        id : 3,
        skill_img : css,
        skill_name : "CSS"
    },
    {
        id : 4,
        skill_img : javascript,
        skill_name : "JavaScript"
    },
    {
        id : 5,
        skill_img : react,
        skill_name : "React Js"
    },
    {
        id : 6,
        skill_img : express,
        skill_name : "Express Js"
    },
    {
        id : 7,
        skill_img : node,
        skill_name : "Node Js"
    },
    {
        id : 8,
        skill_img : sql,
        skill_name : "SQL"
    },
    {
        id : 9,
        skill_img : mongodb,
        skill_name : "MongoDb"
    },
    {
        id : 10,
        skill_img : typescript,
        skill_name : "TypeScript"
    },
]

export const projects_data = [
    {
        id : 1,
        project_name : "Todo Application",
        tech_stack : "MERN Stack | Axios | Redux Toolkit",
        client_url : "https://github.com/PalakJagwani/ToDoClient",
        server_url : "https://github.com/PalakJagwani/ToDoServer",
        project_img : todoMern,
        live_url : "https://to-do-client-ten.vercel.app/",
        description : "My MERN stack todo app 'ToDo' utilizes Redux Thunk for asynchronous actions and Axios for HTTP requests. Leveraging MongoDB, Express.js, React, and Node.js, it enables seamless task management. This project deepened my understanding of state management with Redux, handling asynchronous operations, and integrating external APIs, enriching my full-stack proficiency."
    },
    {
        id : 2,
        project_name : "Blog Application",
        tech_stack : "MERN Stack | Axios",
        client_url : "https://github.com/PalakJagwani/blog-client",
        server_url : "https://github.com/PalakJagwani/blog-server",
        project_img : blog,
        live_url : "https://blog-client-drab.vercel.app/",
        description : "This MERN stack blog app 'bloggers' seamlessly integrates MongoDB, Express.js, React, and Node.js, offering a robust platform for content creation and sharing. Through building it, I grasped the intricacies of full-stack development, mastering database management, server-side routing, and dynamic frontend rendering. User can create account, create, update, delete blog posts and comment on other's posts."
    },
    {
        id : 3,
        project_name : "Routing Application",
        tech_stack : "JavaScript | React Js | React Router Dom",
        client_url : "https://github.com/PalakJagwani/RoutingApplication",
        server_url : "",
        project_img : router,
        live_url : "https://palakjagwani.github.io/RoutingApplication/",
        description : "Utilizing HTML, CSS, JavaScript, React, and React Router DOM, this routing project navigates seamlessly between pages. Crafting it, I deepened my understanding of React's component-based architecture and React Router's dynamic routing capabilities. This project emphasized the importance of efficient navigation and URL management for enhancing user experience in web applications."
    },
    {
        id : 4,
        project_name : "Authentication Form",
        tech_stack : "TypeScript | React Js | React Hook Form",
        client_url : "https://github.com/PalakJagwani/AuthForm",
        server_url : "",
        project_img : authform,
        live_url : "https://palakjagwani.github.io/AuthForm/",
        description : "Crafted with HTML, CSS, JavaScript, React, and React Hook Form, this authentication form ensures secure user access. Developing it, I refined frontend and form validation skills, mastering React Hook Form's simplicity and effectiveness. This project underscored the importance of robust authentication systems and user-friendly design for secure web applications."
    },
    {
        id : 5,
        project_name : "Todo Application",
        tech_stack : "JavaScript | React Js | React Redux",
        client_url : "https://github.com/PalakJagwani/TodoApp",
        server_url : "",
        project_img : todo,
        live_url : "https://palakjagwani.github.io/TodoApp/",
        description : "Employing HTML, CSS, React, and Redux, this todo app efficiently manages tasks with centralized state. Developing it, I enhanced my proficiency in React component interaction and Redux state management. This project emphasized the importance of integrating technologies for streamlined development and enhanced user experience."
    },
    {
        id : 6,
        project_name : "Github Api Fetching",
        tech_stack : "HTML | CSS | JavaScript | Fetch Api",
        client_url : "https://github.com/PalakJagwani/GithubFetchingWebApp",
        server_url : "",
        project_img : fetch,
        live_url : "https://palakjagwani.github.io/GithubFetchingWebApp/",
        description : "Utilizing HTML, CSS, and JavaScript's Fetch API, this GitHub API fetching project retrieves user data dynamically. Crafting it, I refined my frontend development proficiency, deepened my understanding of asynchronous JavaScript, and mastered data manipulation techniques, emphasizing the power of APIs in enhancing web applications' functionality and user experience."
    },
    {
        id : 7,
        project_name : "Calculator",
        tech_stack : "HTML | CSS | JavaScript",
        client_url : "https://github.com/PalakJagwani/Calculator",
        server_url : "",
        project_img : calculator,
        live_url : "https://palakjagwani.github.io/Calculator/",
        description : "Constructed with HTML, CSS, and JavaScript, this calculator project delivers functional arithmetic operations with intuitive design. Building it, I sharpened my frontend development skills, delved into JavaScript's logic, and grasped the intricacies of user interface design, reinforcing the importance of user-centered design principles in web applications."
    },
    {
        id : 8,
        project_name : "PassWord Generator",
        tech_stack : "HTML | CSS | TypeScript",
        client_url : "https://github.com/PalakJagwani/PasswordGeneratorProject",
        server_url : "",
        project_img : password,
        live_url : "https://palakjagwani.github.io/PasswordGeneratorProject/",
        description : "Crafted with HTML, CSS, and TypeScript, this password generator project offers secure and customizable password creation. Through its development, I honed my frontend design skills and deepened my understanding of TypeScript, highlighting the significance of building user-friendly tools for enhancing digital security."
    },
    {
        id : 9,
        project_name : "Portfolio",
        tech_stack : "HTML | CSS | JavaScript | React Js",
        client_url : "https://github.com/PalakJagwani/portfolio-palak-jagwani",
        server_url : "",
        project_img : portfolio,
        live_url : "https://portfolio-palak-jagwani.vercel.app/",
        description : "Crafted with HTML, CSS, and React, this portfolio project showcases skills and projects dynamically. Developing it, I strengthened my frontend development expertise, delving into React's component-based architecture and state management. This project emphasized the importance of responsive design and personal branding, enriching my portfolio and professional presence."
    },
]