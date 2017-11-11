import './styles/App.css';
import './styles/Letter.css';
import './styles/Term.css';
import React, { Component } from 'react';
import Header from './components/Header';
import fire from './utils/fire';

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
    const { glossary, isLoading } = this.state;

    return (
      <div className="App">
        <Header
          glossary={glossary}
        />

        <div className="wrapper">

        {isLoading
          ? <div class="loading">
              <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
            </div>
          : <div className="term-list container">
              {glossary.map((letter) => (
                <div key={letter.letter} id={letter.letter} className="letter-group row">
                  <h3 className="col-xs-1">{letter.letter}</h3>

                  <div className="col-xs-11">
                    {letter.terms.map((t) => (
                      <div className="term" key={t.term}>
                        <h4 className="term__label">{t.term}</h4>
                        <p className="term__definition">{t.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        }
        </div>
      </div>
    );
  }
}

export default App;
