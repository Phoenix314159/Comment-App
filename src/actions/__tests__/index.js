import {saveComment} from 'actions'

describe('saveComment', () => {
    const {type, payload} = saveComment('New Comment');
    it('has the correct type', () => {
        expect(type).toEqual('save_comment');
    });
    it('has the correct payload', () => {
        expect(payload).toEqual('New Comment');
    })
});