import React, { Component } from 'react';
import './App.css';
import fire from './utils/fire';
import Header from './components/header';

class App extends Component {
  state = {
    isLoading: true,
    glossary: []
  }

  componentDidMount() {
    const glossary = fire.database().ref('glossary');
    const _this = this;

    glossary.on('value', function(snapshot) {
      _this.setState({ 
        glossary: snapshot.val(),
        isLoading: false
      })
    });
  }

  render() {
    const { glossary } = this.state;

    return (
      <div className="App">
        <Header/>
        <div className="wrapper">
          <div className="term-list container">
            {glossary.map((letter) => (
              <div key={letter.letter} className="letter-group">
                <h3>{letter.letter}</h3>

                {letter.terms.map((t) => (
                  <div className="term" key={t.term}>
                    <h4 className="term__label">{t.term}</h4>
                    <p className="term__definition">{t.definition}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
