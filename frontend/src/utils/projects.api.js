import axios from 'axios';

const pageAPI = axios.create({
    baseURL: "https://linyers.duckdns.org/api/",
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