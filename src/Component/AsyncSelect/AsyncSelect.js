import React from "react";
import Async from "react-select/async";

export class AsyncSelect extends React.Component {
  getSelectOption = selectValue => {
    return this.props.getCategoryOptionList(selectValue);
  };
  render() {
    const { input } = this.props;
    return (
      <Async
        {...input}
        className="text-left"
        defaultOptions
        loadOptions={this.getSelectOption}
      />
    );
  }
}
