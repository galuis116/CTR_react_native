import * as TYPES from "./types";

export const load_user_data = (data) => {
    return {
        type : TYPES.LOAD_USER_DATA,
        payload : data
    }
}

export const load_themes = (data) => {
    return {
        type : TYPES.LOAD_THEMES,
        payload : data
    }
}