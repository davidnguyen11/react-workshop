import React, { Component } from 'react';

import Panel from './components/Panel';
import ListItem from './components/ListItem';

import Title from './components/Title';
import Thumbnail from './components/Thumbnail';
import Description from './components/Description';

import './App.css';

const rawData = require('./data');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      detail: undefined,
      activeId: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      books: rawData,
    });
  }

  handleItemClick = item => {
    this.setState({
      detail: item,
      activeId: item.id,
    });
  }

  render() {
    const { books, detail, activeId } = this.state;
    return (
      <div className="App">
        <Panel position="left">
          <ListItem
            activeId={activeId}
            dataSource={books}
            onItemClick={(item) => this.handleItemClick(item)}
          />
        </Panel>

        <Panel position="right">
          {
            detail && (
              <div>
                <Title>{detail.title}</Title>
                <Thumbnail alt={detail.title} src={detail.thumbnail} />
                <Description>{detail.description}</Description>
              </div>
            )
          }
        </Panel>
      </div>
    );
  }
}

export default App;
