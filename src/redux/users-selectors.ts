import { AppStateType } from "./redux-store"

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalPage = (state: AppStateType) => {
    return state.usersPage.totalPage
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingProgress
}
