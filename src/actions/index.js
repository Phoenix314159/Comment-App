import types from 'actions/types'
import axios from 'axios'

export const saveComment = comment => {
    return {
        type: types.SAVE_COMMENT,
        payload: comment
    }
};

export const fetchComments = async dispatch => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/comments");
    return dispatch({
        type: types.FETCH_COMMENTS,
        payload: res
    })
};