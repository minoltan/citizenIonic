const defaultState = {
    user: {},
    newsData: [],
    testData: {
        name: "minoltan",
        age: "25"
    },
    user1: {
        isLoggedIn: false
    },
    filterNewsData: {
        title: [{name: 'mino'},{name:'b'}]
    }

}

export default function reducer(
    state = defaultState, 
    {type, payload}: {type: string, payload: any}
    ):any {
switch(type){
    case 'SET_USER_LOGGEDIN':
        return {
            ...state,
            user1: {
                isLoggedIn: true
            }
            
        }

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
            newsData: {
                title: payload}
        }
    case 'SET_FILTER_NEWS_DATA': return {
            ...state,
            filterNewsData: {
                title: payload}
        }

    case 'SET_USER_ID' : return {
            ...state,
            user: {
                userId: payload
            }
    }
    
    
}
return state
}