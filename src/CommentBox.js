import React from 'react';
class CommentBox extends React.Component {
    addComment = () => {
        this.props.addComment(this.msgInputRef.current.value);
        this.msgInputRef.current.value = '';
    }
    constructor(props) {
        super(props);
        this.msgInputRef = React.createRef();
    }
    render() {
        const commentBoxJsx = (
            <div>
                <input type="text" ref={this.msgInputRef} />
                <button onClick={this.addComment}>Post</button>
            </div>
        );
        return commentBoxJsx;
    }
}
export default CommentBox;