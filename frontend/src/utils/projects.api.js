import axios from 'axios';

const pageAPI = axios.create({
    baseURL: "http://18.220.183.229:8000/api/",
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