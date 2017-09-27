import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	updateText(event) {
		this.setState({text: event.target.value})
	}

	render () {
		return (
			<div>
			<input 
				onChange = {(event) => this.updateText(event)}
				value = {this.state.text}
			/>
			<button onClick = {() => this.props.addNewTodoFunc(this.state.text)}>Click Here</button>
			</div>
		);
	}
}

export default TodoForm;