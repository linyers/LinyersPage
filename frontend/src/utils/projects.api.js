import axios from 'axios';

const projectsAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/api/projects/",
})

export const getProjects = () => {
    return projectsAPI("/");
}