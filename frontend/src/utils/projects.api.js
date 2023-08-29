import axios from 'axios';

const pageAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})

export const getProjects = () => {
    return pageAPI.get("projects/");
}

export const getPosts = () => {
    return pageAPI.get("posts/");
}

export const getPost = (slug) => {
    return pageAPI.get(`posts/?slug=${slug}`);
};

export const getCategory = (name) => {
    return pageAPI.get(`posts/?category=${name}`);
};