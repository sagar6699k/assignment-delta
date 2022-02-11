import { ADD_MEMBER_ERROR, ADD_MEMBER_LOADING, ADD_MEMBER_SUCCESS, DEL_MEMBER_ERROR, DEL_MEMBER_LOADING, DEL_MEMBER_SUCCESS, GET_MEMBER_ERROR, GET_MEMBER_LOADING, GET_MEMBER_SUCCESS, GET_TOKEN, UPDATE_MEMBER_ERROR, UPDATE_MEMBER_LOADING, UPDATE_MEMBER_SUCCESS } from "./actionTypes"


export const add_member_loading = () => {
    return {
        type: ADD_MEMBER_LOADING,
    }
}

export const add_member_success = (data) => {
    return {
        type: ADD_MEMBER_SUCCESS,
        payload:data,
    }
}

export const add_member_error = (error) => {
    return {
        type: ADD_MEMBER_ERROR,
        payload:error
    }
}



//GET
export const get_member_loading = () => {
    return {
        type: GET_MEMBER_LOADING,
    }
}

export const get_member_success = (data) => {
    return {
        type: GET_MEMBER_SUCCESS,
        payload:data,
    }
}

export const get_member_error = (error) => {
    return {
        type: GET_MEMBER_ERROR,
        payload:error,
    }
}
//DEL
export const del_member_loading = () => {
    return {
        type: DEL_MEMBER_LOADING,
    }
}

export const del_member_success = (data) => {
    return {
        type: DEL_MEMBER_SUCCESS,
        payload:data,
    }
}

export const del_member_error = (error) => {
    return {
        type: DEL_MEMBER_ERROR,
        payload:error,
    }
}

//UPDATE
export const update_member_loading = () => {
    return {
        type: UPDATE_MEMBER_LOADING,
    }
}

export const update_member_success = (data) => {
    return {
        type: UPDATE_MEMBER_SUCCESS,
        payload:data,
    }
}

export const update_member_error = (error) => {
    return {
        type: UPDATE_MEMBER_ERROR,
        payload:error,
    }
}

//TOKEN
export const get_token = (new_token) => {
    return {
        type: GET_TOKEN,
        payload:new_token,
    }
}