import *as axios from 'axios'

const instance = axios.create({
    withCredentials : true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '024fbca6-32f3-4869-a4f3-5b072bcf7e33'
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
   .then(response =>{
     return response.data
   }) 
}
export const getMainProfile = (userID) =>{
    // debugger
   return instance.get(`profile/${userID}`)
   .then(response =>{
     return response.data
   }) 
}