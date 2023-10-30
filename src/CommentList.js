import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        var index = 0;
        const commentListJsx = (
            <div className="commentList">
                {this.props.messages.map(
                    (msg) =>
                        <Comment
                            key={index}
                            index={index++}
                            message={msg}
                            {...this.props} // SAME RESULT ==> deleteComment={this.props.deleteComment}
                        />
                )}
            </div>
        );
        return commentListJsx;
    }
}

export default CommentList;