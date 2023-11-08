import { Component } from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
class App extends Component {
  state = {
    messages: [
      'React seems like a really cool library',
      'I love using components in React',
      'Makes development so easy',
      'It was hard to follow at first but now I love it',
    ]
  }
  handleDeleteCommentEvent = (commentIndex) => {
    this.setState(
      function (prevState, props) {
        const prevMessages = prevState.messages.concat();
        console.log("prevMessages: ", prevMessages);
        prevMessages.splice(commentIndex, 1);
        console.log("prevMessages: ", prevMessages);
        return {
          messages: prevMessages
        }
      });
    alert("Comment deleted!");
  }
  handlePostCommentEvent = (newComment) => {
    var updatedCommentList = this.state.messages.concat();
    updatedCommentList.push(newComment);
    this.setState({
      messages: updatedCommentList
    })
  }
  render() {
    const appJsx = (
      <div>
        <CommentBox addComment={this.handlePostCommentEvent} />
        <CommentList
          messages={this.state.messages}
          deleteComment={this.handleDeleteCommentEvent}
        />
      </div>
    );
    return appJsx;
  }
}

export default App;