import React, { Component } from 'react';

import Menu from './menu'
import Board from './board'

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			show_moves: true
		};
	}

	toggleShowMoves() {
		this.setState({show_moves: !this.state.show_moves});
	}

  render() {
  	const props = {
  		showMoves: this.state.show_moves,
  		toggleShowMoves: this.toggleShowMoves.bind(this)
  	};

    return <div id="app"> 
    	<Menu {...props} />	
      <Board {...props} />
    </div>
  
  }

}

export default App;