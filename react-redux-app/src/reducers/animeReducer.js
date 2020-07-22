import { FETCH_DATA, UPDATE_ANIMES, SET_ERROR } from "../actions";

const initialState = {
    anime: [],
    isFetchingData: false,
    error: ''
};

export const animeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                anime: []
            };
        case UPDATE_ANIMES:
            return {
                ...state,
                isFetchingData: false,
                anime: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
};