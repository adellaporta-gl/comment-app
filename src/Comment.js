import React, { Component } from 'react';
import message from './message.png';
import trash from './trash.png';

class Comment extends React.Component {
    deleteComment = () => {
        console.log("comment to delete: " + this.props.index);
        this.props.deleteComment(this.props.index);
    }
    render() {
        const commentJsx = (
            <table className="comment">
                <tbody>
                    <tr>
                        <td className="photo">
                            <img src={message} alt="message icon" />
                        </td>
                        <td className="message">
                            {this.props.message}
                        </td>
                        <td className="delete">
                            <img src={trash} alt="trash icon" onClick={this.deleteComment} />
                        </td>
                    </tr>

                </tbody>
            </table>
        );
        return commentJsx;
    }
}

export default Comment;