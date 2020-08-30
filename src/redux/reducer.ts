const defaultState = {
    user: {},
    newsData: [],
    testData: {
        name: "minoltan",
        age: "25"
    }
}

export default function reducer(
    state = defaultState, 
    {type, payload}: {type: string, payload: any}
    ):any {
switch(type){
    case 'SET_USER_STATE':
        return {
            ...state,
            user: {
                username: payload.split('@')[0]
            }
        }
    case 'SET_USER_TEST_DATA': return {
            ...state,
            testData: {
                name: payload.name,
                age: payload.age
            }
        }

    case 'SET_NEWS_DATA': return {
            ...state,
            newsData: {title: payload.title}
        }
    
}
return state
}