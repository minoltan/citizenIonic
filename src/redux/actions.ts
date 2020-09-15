export const setLoggedIn = (payload:any) => {
    return {
         type: 'SET_USER_LOGGEDIN', 
         payload}
}

export const setUserState = (payload:any) => {
    return {
         type: 'SET_USER_STATE', 
         payload}
}

export const setUserId = (payload:any) => {
    return {
         type: 'SET_USER_ID', 
         payload}
}

export const setTestDataState = (payload:any) => {
    return {
         type: 'SET_USER_TEST_DATA',  payload}
         
}

export const setNewsDataState = (payload:any) => {
    return {
         type: 'SET_NEWS_DATA',  payload
        
        }     
         
}

export const setFilterNewsDataState = (payload:any) => {
    return {
         type: 'SET_FILTER_NEWS_DATA',  payload
        
        }
         
         
}