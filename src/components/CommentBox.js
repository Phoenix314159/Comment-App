import React, {Component} from 'react'
import {connect}  from 'react-redux'
import {fetchComments, saveComment} from 'actions'

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value} )
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' })
    };

    fetchComments = () => {
        this.props.fetchComments()
    };

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange}
                          value={this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
                <button className="fetch-comments"
                        onClick={this.props.fetchComments}>
                    Fetch Comments</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => (
    {
        fetchComments: () => dispatch(fetchComments),
        saveComment: comment => dispatch(saveComment(comment))
    }
);
export default connect(null, mapDispatchToProps)(CommentBox)