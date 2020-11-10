import React from "react";
class Edits extends React.Component {
  getInitialState: function() {
    return {
      editing: false,
      // ** Initialize "text" property with empty string here
      text: ''
    }
  },
  edit: function() {
    this.setState({
      editing: true
    })
  },
  save: function() {
    var val = this.refs.newText.value;
    alert(val)
    this.setState({
      // ** Update "text" property with new value (this fires render() again)
      text: val,
      editing: false
    })
  },
  renderNormal: function() {
    // ** Render "state.text" inside your <p> whether its empty or not...
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.edit}>Edit</button>
    </div>
    )
  },
  renderForm: function() {
    return (
      <div>
         <textarea ref="newText" defaultValue="Edit me"></textarea>
        <button onClick={this.save}>Save</button>
    </div>
    )
  },
  render: function() {
    if (this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderNormal()
    }
  }
}
