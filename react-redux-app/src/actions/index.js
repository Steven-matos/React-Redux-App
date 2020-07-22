import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ANIMES = "UPDATE_ANIMES";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch =>{
    dispatch({ type: FETCH_DATA }); 
    axios.get('https://api.jikan.moe/v3/top/anime/1')
    .then(res => {
        console.log(res.data.top);
        dispatch({ type: UPDATE_ANIMES, payload: res.data.top })
    })
    .catch(err => {
        console.error(err.response);
        dispatch({ type: SET_ERROR, payload: "error fetching data from API!" });
    })
};