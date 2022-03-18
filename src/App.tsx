import React, { Component } from 'react';

import { connect, sendMessage } from './api';

class App extends Component {
	constructor(props: any) {
		super(props);
		connect();
	}
	send() {
		console.log('Hello');
		sendMessage('hello');
	}

	render() {
		return (
			<div className='App'>
				<button onClick={this.send}>Hit</button>
			</div>
		);
	}
}

export default App;
