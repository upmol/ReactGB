import React from "react";

export class Message extends React.Component {
  render() {
    return (
      <form>
        <h3 className="textMassage">{this.props.textMassage}</h3>
      </form>
    );
  }
}
