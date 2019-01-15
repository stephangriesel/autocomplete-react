import React, { Component } from "react";

export class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["Piet", "Peester", "Sannie", "Jannie", "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
    this.state = {
      suggestions: [],
      text: [],
    };
  }

  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value  }));
  };

  suggestionSelected (value) {
      this.setState(() => ({
          text:value,
          suggestions:[],
      }))
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={(() => this.suggestionSelected(item))}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
      const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.onTextChanged} type="text" />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompleteText;
