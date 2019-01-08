import React, { Component } from 'react'

export class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            'Piet',
            'Peester',
            'Sannie',
            'Jannie'
        ];
    }
  render() {
    return (
      <div>
        <input type="text" />
        <ul>
            {this.items.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default AutoCompleteText
