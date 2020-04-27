import axios from "axios";

export const getUsers = () => axios.get("/api/admin/all");
