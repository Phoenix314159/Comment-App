import {SAVE_COMMENT} from 'actions/types'
import {saveComment} from 'actions'

describe('saveComment', () => {
    const {type, payload} = saveComment('New Comment');
    it('has the correct type', () => {
        expect(type).toEqual(SAVE_COMMENT);
    });
    it('has the correct payload', () => {
        expect(payload).toEqual('New Comment');
    })
});