import React from "react";
import s from "./Comment.module.css";
import { API } from "../../../Service/API";

export class Comment extends React.Component {
  state = {
    answer: false
  };

  commentAnswerRef = React.createRef();
  commentSaveRef = React.createRef();

  showTextarea = e => {
    e.preventDefault();
    this.setState({
      answer: !this.state.answer
    });
  };

  handleAddAnswerComment = e => {
    e.preventDefault();
    const id = this.props.id;
    const text = this.commentAnswerRef.current.value;
    const parentId = this.props.comment.id || null;
    API.addComment(id, text, parentId).then(res => {
      if (res.status === 200) {
        this.props.showComment(id);
        this.setState({
          answer: false
        });
      }
      return res;
    });
  };

  handleEditComment = e => {
    e.preventDefault();
    const id = this.props.comment.id;
    const parentId = this.props.comment.parent.id;
    const productId = this.props.id;
    const text = this.commentSaveRef.current.value;
    console.log(id, parentId, productId, text);
    API.editComment(id, parentId, productId, text).then(res => {
      if (res.status === 200) {
        this.props.showComment(productId);
        this.setState({
          answer: false
        });
      }
      return res;
    });
  };

  renderTextarea() {
    if (this.state.answer) {
      return (
        <>
          {this.props.user.id === this.props.comment.user.id
            ? this.renderEditTextarea()
            : this.renderAnswerTextArea()}
        </>
      );
    }
    return this.renderAnswerBtn();
  }

  renderAnswerTextArea() {
    return (
      <form className={s.form}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Write your comment:
          </label>

          <textarea
            className={s.textarea}
            rows="6"
            placeholder="Comment..."
            ref={this.commentAnswerRef}
          />

          <button
            className={`btn btn-primary ${s.sendComment}`}
            onClick={this.handleAddAnswerComment}
          >
            Send
          </button>
          <button
            className={`btn btn-primary ${s.sendComment}`}
            onClick={this.showTextarea}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  renderAnswerBtn() {
    if (this.props.user.id !== this.props.comment.user.id) {
      return (
        <button
          className={`btn btn-info ${s.answerBtn}`}
          onClick={this.showTextarea}
        >
          Answer
        </button>
      );
    }
    return (
      <button
        className={`btn btn-info ${s.answerBtn}`}
        onClick={this.showTextarea}
      >
        Edit
      </button>
    );
  }

  renderEditTextarea() {
    if (this.state.answer) {
      return (
        <form className={s.form}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Edit your comment:
            </label>
            <textarea
              className={s.textarea}
              rows="6"
              placeholder="Comment..."
              defaultValue={this.props.comment.text}
              ref={this.commentSaveRef}
            />

            <button
              className={`btn btn-primary ${s.sendComment}`}
              onClick={this.handleEditComment}
            >
              Save
            </button>
            <button
              className={`btn btn-primary ${s.sendComment}`}
              onClick={this.showTextarea}
            >
              Cancel
            </button>
          </div>
        </form>
      );
    }
    return this.renderAnswerBtn();
  }

  render() {
    return (
      <div className={s.comment}>
        <ul>
          <li className={s.date}>{this.props.comment.date}</li>
          <li className={s.user}>{this.props.comment.user.firstName}</li>
          <li>{this.props.comment.text}</li>
        </ul>
        {this.renderTextarea()}
      </div>
    );
  }
}
