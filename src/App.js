import React, { Component } from 'react';
import './styles/App.css';
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
        <div className="term-list">
          {glossary.map((letter) => (
            <div key={letter.letter} className="letter-group">
              <h3>{letter.letter}</h3>

              <ul className="letter-terms">
                {letter.terms.map((t) => (
                  <li key={t.term}>
                    <h4>{t.term}</h4>
                    <p>{t.definition}</p>
                    {t.citation}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
