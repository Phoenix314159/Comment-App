import 'styles/App.css'
import React from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
    return (
        <div className="main">
            <CommentBox/>
            <CommentList/>
        </div>
    )
}