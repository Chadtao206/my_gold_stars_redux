import axios from "axios";

export const getUsers = () => axios.get("/api/admin/all");
export const addStar = id => axios.post(`/api/admin/add/${id}`);
export const removeStar = id => axios.post(`/api/admin/remove/${id}`);
export const getProjects = () => axios.get("/api/projects/all");
export const updateProjectDesc = (id, desc) =>
  axios.put(`/api/projects/desc/${id}`, { desc });
export const updateProjectImg = (id, url) =>
  axios.put(`/api/projects/img/${id}`, { url });
