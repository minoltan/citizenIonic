export const setUserState = (payload:any) => {
    return {
         type: 'SET_USER_STATE', 
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