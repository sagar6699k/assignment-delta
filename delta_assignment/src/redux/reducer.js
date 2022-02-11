import { ADD_MEMBER_ERROR, ADD_MEMBER_LOADING, ADD_MEMBER_SUCCESS, GET_MEMBER_ERROR, GET_MEMBER_LOADING, GET_MEMBER_SUCCESS, GET_TOKEN, UPDATE_MEMBER_ERROR, UPDATE_MEMBER_LOADING, UPDATE_MEMBER_SUCCESS } from "./actionTypes";

const initialState = {
    team: {
        loading: false,
        data: [],
        error: false
    }
}

export const Team_reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_MEMBER_LOADING:
            return {
                ...state,
                team: {
                    ...state.team,
                    loading: true
                }
            }
        
        case ADD_MEMBER_SUCCESS:
            return {
                ...state,
                team: {
                    ...state.team,
                    loading: false,
                    data: [...state.team.data, payload] 
                }
            }
        
        case ADD_MEMBER_ERROR:
            return {
                ...state,
                team: {
                    ...state.team,
                    loading: false,
                    error: payload,
                },
            };
            
        
        
        //GET

        case GET_MEMBER_LOADING:
          
            return {
                ...state,
                team: {
                    ...state.team,
                    loading: true,
                },
            };

        case GET_MEMBER_SUCCESS:
            return {
                ...state,
                team: {
                    loading: false,
                    ...state.team,
                    data: payload,
                },
            };

        case GET_MEMBER_ERROR:
            return {
                ...state,
                team: {
                    ...state.team,
                    loading: false,
                    error: payload,
                },
            };
        
        //UPDATE

        case UPDATE_MEMBER_LOADING:
          
            return {
                ...state,
                team: {
                    ...state.team,
                    loading: true,
                },
            };

        case UPDATE_MEMBER_SUCCESS:
            return {
                ...state,
                team: {
                    loading: false,
                    ...state.team,
                    data: payload,
                },
            };

        case UPDATE_MEMBER_ERROR:
            return {
                ...state,
                team: {
                    ...state.team,
                    loading: false,
                    error: payload,
                },
            };
    
        default:
            return state;
    }
}

const initialToken = null;

export const Auth_reducer = (state = initialToken, { type, payload }) => { 

    switch (type) {
        case GET_TOKEN:
            return state = payload
        
        default:
            return state;
    }
}