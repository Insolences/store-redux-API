import React from "react";
import ReactDOM from "react-dom";
import s from "./Notification.module.css";
const notification = document.getElementById("notification");

export class Notification extends React.Component {
  state = {
    isOpen: false
  };

  redirectCallBack = () => {
    this.setState({
      isOpen: false
    });
    this.props.clearErrorMassageEvent();
  };

  static getDerivedStateFromProps(props) {
    if (props.message || props.error) {
      return {
        isOpen: true
      };
    }

    return null;
  }

  shadowClick = e => {
    if (e.target === e.currentTarget) {
      this.setState({
        isOpen: false
      });
    }
  };

  renderNotification() {
    return (
      <div className={s.shadow} onClick={this.shadowClick}>
        <div className={`modal-dialog ${s.modal}`}>
          <div className={s.content}>
            <div className="modal-header">
              <h5 className="modal-title">Massage:</h5>
              <button
                type="button"
                className="close"
                onClick={this.redirectCallBack}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.error || this.props.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.isOpen === false) {
      return null;
    }
    return ReactDOM.createPortal(this.renderNotification(), notification);
  }
}
