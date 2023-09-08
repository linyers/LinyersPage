import axios from 'axios';

const pageAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export const getProjects = (p=1) => {
    return pageAPI.get(`projects/?p=${p}`);
}

export const getPosts = (p=1) => {
    return pageAPI.get(`posts/?p=${p}`);
}

export const getPost = (slug) => {
    return pageAPI.get(`posts/?slug=${slug}`);
};

export const getCategory = (name, p=1) => {
    return pageAPI.get(`posts/?category=${name}&p=${p}`);
};