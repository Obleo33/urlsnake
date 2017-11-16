import React, { Component } from 'react'

class SubmitUrl extends Component {
	constructor() {
		super()
		this.state = {
			url: '',
		}
	}

	handleClick(e) {
		e.preventDefault()
		this.props.getUrl(this.state.url)
		this.setState({ url: '' })
	}

	render() {
		return(
			<section id="url-section">
				<form className="url-form">
					<input type="text" 
						   value={ this.state.url }
						   onChange={(e) => this.setState({url: e.target.value})}
						   placeholder="type in a full url" />
					<input onClick={ this.handleClick.bind(this) } 
						   type="submit" 
						   value="Submit" />
				</form>
			</section>
		)
	}
}

export default SubmitUrl;