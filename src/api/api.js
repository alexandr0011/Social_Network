import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '77d91c86-6c08-4117-bdb8-da736f5c093e'
    }
})

export const getUsers = (currentPage, pageSize ) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}

export const getAuth = () => {
    return instance.get('auth/me',)
        .then(response => response.data);
}

export const follow = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data);
}

export const unfollow = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data);
}
