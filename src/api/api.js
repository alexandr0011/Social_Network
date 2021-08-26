import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c17abf72-5ec7-49b4-85f4-0c1f84454471'
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

export const getProfile = (userId) => {
    return profileAPI.getProfile(userId)
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data);
    }
}