import * as TYPES from "../actions/types";

const initialState = {
    trial_days : 14,
    trial_quotes : 14,
    purchase_token : "",
    membership : "trial",
    transactionId : "",
    expired_at : "",
    pay_method : "",
    uid : "",
    reminder : null,
    theme : null,
    themes : [],
    quote : null,
    favorites : [],
    month : 0,
    date : 1,
    year : 2021,
    viewed_quotes : [],
    membership_status : "active"
}

export default UserReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        
        case TYPES.LOAD_USER_DATA:
            return {
                ...state,
                ...payload
            }
        case TYPES.LOAD_THEMES :
            return {
                ...state,
                themes : payload
            }

        default : return state
    }

}

