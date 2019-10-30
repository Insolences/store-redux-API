import React from "react";
import s from "./CommentList.module.css";
import { Comment } from "./Comment";
import { API } from "../../Service/API";
import { Pagination } from "../Pagination";

export class CommentList extends React.Component {
  state = {
    comments: []
  };

  commentRef = React.createRef();

  componentDidMount() {
    this.getComment();
  }

  handleSendComment = e => {
    e.preventDefault();
    const id = this.props.id;
    const text = this.commentRef.current.value;
    API.addComment(id, text, null).then(res => {
      if (res.status === 200) {
        this.getComment(id);
      }
      return res;
    });
  };

  getComment = (
    id = this.props.id,
    size = this.props.size,
    pageNumber = this.props.pageNumber
  ) => {
    API.showComment(id, size, pageNumber).then(res => {
      let newComments = res.body.content;
      this.setState({
        comments: newComments
      });
    });
  };

  renderComments(comments) {
    return (
      <>
        {comments.map(el => (
          <div className={s.answerComment}>
            <Comment
              key={el.id}
              comment={el}
              showComment={this.getComment}
              id={this.props.id}
            />
            {el.childs.length ? this.renderComments(el.childs) : ""}
          </div>
        ))}
      </>
    );
  }

  render() {
    return (
      <>
        <div className={s.comment}>
          <h3>Comments:</h3>
          {this.renderComments(this.state.comments)}
        </div>
        <Pagination
          pages={this.props.pages}
          pageNumber={this.props.pageNumber}
          changePage={this.props.getCommentsListEvent}
        />
        <form className={s.form}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Write your comment:
            </label>
            <textarea
              className={s.textarea}
              rows="6"
              placeholder="Comment..."
              ref={this.commentRef}
            />
            <button
              name="sendComment"
              className={`btn btn-primary ${s.sendComment}`}
              onClick={this.handleSendComment}
            >
              Send
            </button>
          </div>
        </form>
      </>
    );
  }
}
