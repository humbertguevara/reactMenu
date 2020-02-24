import React from 'react';

import DataApi from '../api/DataApi';
import { data } from '../data/test_data';

import Menu from './Menu';
import Grid from './Grid';

import '../styles/App.css';

const api = new DataApi(data);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedGrid: 0,                  
      sections: api.getSections(),
      items: api.getSections()
    }
  }

  onClickSection(newSelectedGrid) {              
    this.setState({      
      selectedGrid: newSelectedGrid,      
      items: api.getItemsBySection(newSelectedGrid)
    });     
  };

  render() {
    return (      
        <div className="app">
          <header className="app-header">
            <section id="topMenu">
              <Menu 
                onSectionClick={this.onClickSection.bind(this)} 
                sections={this.state.sections} 
                selectedSection={this.state.selectedGrid}/>
            </section>            
          </header>
          <main className="app-main">
            <section id="contentGrid">              
              <Grid items={this.state.items} />              
            </section>
          </main>
          <footer></footer>
        </div>      
    );
  }
}

export default App;
