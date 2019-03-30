import types from 'actions/types'


export default (state = [], action) => {
    const {type, payload} = action;


    switch (type) {
        case types.SAVE_COMMENT:
            return [...state, payload];
        case types.FETCH_COMMENTS:
            const comments = payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state
    }
}