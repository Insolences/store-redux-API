import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends React.Component {
  isOpen = true;

  shadowClick = e => {
    if (e.target === e.currentTarget) {
      this.isOpen = false;
      this.forceUpdate(() => {
        this.isOpen = true;
      });
    }
  };

  renderModal() {
    return (
      <div className={s.shadow} onClick={this.shadowClick}>
        <div className={s.modal}>
          <h2>{this.props.title}</h2>

          {this.props.children}

          <div className={s.buttons}>
            <button
              className={"btn btn-primary " + s.button}
              onClick={this.props.saveHandler}
            >
              Save
            </button>
            <button
              className={"btn btn-secondary " + s.button}
              onClick={this.props.cancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.isOpen === false || this.isOpen === false) {
      return null;
    }

    return ReactDOM.createPortal(this.renderModal(), modalRoot);
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  saveHandler: PropTypes.func,
  cancelHandler: PropTypes.func
};
