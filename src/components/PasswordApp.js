import React from 'react';

export default class PasswordApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			length: 4,
			numbers: false,
			symbols: false
		}
	}
	render() {
		return (
			<div>
				<h1>password generator</h1> 
				<input type="text"/>
				<button>Generate!</button>
				<fieldset>
					<Options />
				</fieldset>
			</div>
		)
	}
}

class Options extends React.Component {
	
	render() {
		return (
			<div>
				<p>Length( <span></span> )</p>
				<input type="range"  min="4" max="20"/>
				<p>Numbers? <input type="checkbox"/> </p>
				<p>Symbols? <input type="checkbox"/> </p>
			</div>
		)
	}
}



 