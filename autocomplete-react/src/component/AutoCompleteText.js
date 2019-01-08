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
        this.state = {
            suggestions: [],
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => v.test(regex));
        }
        this.setState(() => ({ suggestions }));
        }

    
  render() {
    return (
      <div>
        <input onChange={this.onTextChanged} type="text" />
        <ul>
            {this.items.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default AutoCompleteText
