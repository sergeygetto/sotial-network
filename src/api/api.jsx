import *as axios from 'axios'

const instance = axios.create({
    withCredentials : true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3c8acc23-8315-4ef6-bebb-1d5bf490ef0a'
    }
})


export const getUserPage = (currentPage, pageSize) =>  {
    return instance.get( `users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
       return response.data
    })    
}


export const getUserPageChange = (p, pageSize) =>  {
    return instance.get(`users?page=${p}&count=${pageSize}`)
    .then(response => {
       return response.data
    })    
}

export const getUnfollow = (use) => {
    // debugger
    return instance.delete(`follow/${use}`)
    .then(response =>{
        return response.data
    })
}

export const getFollow = (use) => {
    return instance.post(`follow/${use}`)
    .then(response =>{
        return response.data
    })
}

export const getHeader = () =>{
   return instance.get(`auth/me`) 
}
export const getMainProfile = (userID) =>{
    // debugger
   return instance.get(`profile/${userID}`)
   .then(response =>{
     return response.data
   }) 
}
export const getUsersStatus = (userID) =>{
   return instance.get(`profile/status/` + userID) 
}
export const updateUsersStatus = (status) =>{
   return instance.put(`profile/status` ,{status: status}) 
}

export const login = (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
}
export const logout = () => {
    return instance.delete(`auth/login`)
}