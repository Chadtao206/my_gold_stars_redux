import axios from "axios";

export const getUsers = () => axios.get("/api/admin/all");
export const addStar = id => axios.post(`/api/admin/add/${id}`);
export const removeStar = id => axios.post(`/api/admin/remove/${id}`);
