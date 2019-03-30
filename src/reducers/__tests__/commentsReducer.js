import commentsReducer from 'reducers/commentsReducer'
import types from 'actions/types'


it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: types.SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment'])

});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'unknown'});
    expect(newState).toEqual([])
});