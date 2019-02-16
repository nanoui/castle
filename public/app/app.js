/*
    We add the packages in our project for those reasons (in node_module):
    React: A library to speed up development
    React-DOM: A library which allows React to interact with the DOM in a browser
    Parcel: A bundling library which requires no config
    Babel-preset-env: A library which tells Parcel how to transform ES6 to work with many different browsers
    Babel-preset-react: A library which tells Parcel how to handle JSX (much easier)
    Bulma: A CSS framework that uses flexbox and is easy to use
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

// create an App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
      ]
    };
  }

  // using Bulma for my styles
  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <List items={this.state.list} />
          </section>
        </div>
      </div>
    );
  }
}

// create the List component
class List extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          filtered: []
      };
      this.handleChange = this.handleChange.bind(this);
  }

  // lifecycles method allow us to "hook" into a component at various points in it's render process
  componentDidMount() {
    // to put the data into our filtered array when the component is initially rendered
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    // will fire any time the props being passed into the component are changed
    this.setState({
      filtered: nextProps.items
    });
  }

  handleChange(e) {
    let currentList = []; // hold the original version of the list
    let newList = []; // hold the filtered list before putting into state

    // If the search bar isn't empty, run .filter() to determine which items should be displayed
    if (e.target.value !== "") {
      currentList = this.props.items; // Assign the original list to currentList

      newList = currentList.filter(item => {
        // change current/search item to lowercase, to eliminate issues with capitalization
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term --> if it does, add it to newList.
        return lc.includes(filter);
      });
    }

    else {
      newList = this.props.items; // If the search bar is empty, set newList to original task list
    }

    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  // using Bulma for my styles
  render() {
    return (
      <div>
        {/* in html : <ul><li></li>...</ul> is a list */}

        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
          <ul>
            {/* here the curly braces enable us to escape the JSX syntax, using .map() = javascript function
              this.state.list = get the list created in the constructor
              .map() = works like a foreach, it loops  through each items of the array */}

            {this.state.filtered.map(item => (
                <li key={item}>{item}</li>
            ))}
          </ul>
      </div>
    )
  }
}

// to make sure that our component is rendering to the DOM
ReactDOM.render(<App />, document.getElementById("app"));
