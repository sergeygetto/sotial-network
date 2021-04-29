import { PhotosType, ProfileType, UsersType } from './../types/Types';
import axios from 'axios'

// type InstanseType = {
//     withCredentials: boolean
//     baseURL: string
//     headers: {}
// }

const instance = axios.create({
    withCredentials : true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3c8acc23-8315-4ef6-bebb-1d5bf490ef0a'
    }
})


type getUserType = {
    items: Array<UsersType>
    totalCount: number
    error: string
}

export const getUserPage = (currentPage: number, pageSize: number) =>  {
    return instance.get<getUserType>( `users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
       return response.data
    })    
}


export const getUserPageChange = (p: number, pageSize: number) =>  {
    return instance.get<getUserType>(`users?page=${p}&count=${pageSize}`)
    .then(response => {
       return response.data
    })    
}

type FollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
export const getUnfollow = (use:number) => {
    // debugger
    return instance.delete<FollowType>(`follow/${use}`)
    .then(response =>{
        return response.data
    })
}

export const getFollow = (use:number) => {
    return instance.post<FollowType>(`follow/${use}`)
    .then(response =>{
        return response.data
    })
}

type HeaderType = {
    data: {id: number, email: string, login: string}
    resultCode: number
    messages: Array<string>
}
export const getHeader = () =>{
   return instance.get<HeaderType>(`auth/me`) 
}


export const getMainProfile = (userID: number) =>{

   return instance.get<ProfileType>(`profile/${userID}`)
   .then(response =>{
     return response.data
   }) 
}
type StatusType = {
    resultCode: number
    messages: Array<string>
    data:{}
}
export const getUsersStatus = (userID: number) =>{
   return instance.get(`profile/status/` + userID) 
}
export const updateUsersStatus = (status: string) =>{
   return instance.put<StatusType>(`profile/status` ,{status: status}) 
}

type LoginType = {
    data: {}
    resultCode: number
    messages: Array<string>
}
export const login = (email: string, password: string, rememberMe:boolean = false, captcha: null |string = null) => {
    return instance.post<LoginType>(`auth/login`, {email, password, rememberMe, captcha})
}
export const logout = () => {
    return instance.delete<LoginType>(`auth/login`)
}

type PhotosSuccessType = {
    data: {small: string, large: string}
    resultCode: number
    messages: Array<string>
}
export const savePhotosSuccess = (photoFile: any) => {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo` , formData , {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    })
}
export const profileUpdateDescription = (profile: ProfileType) => {
    return instance.put<LoginType>(`profile` , profile)
}

type UrlSecurityType = {
    url: string
}
export const captchaUrlSecurity = () => {
    return instance.get<UrlSecurityType>(`security/get-captcha-url`)
}
