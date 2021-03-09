import React, { Component } from 'react'

export default class DarkModeButton extends Component {
	componentDidMount() {
		let btn = document.getElementById('Checkbox')
		let publicDir = process.env.PUBLIC_URL

		if (localStorage.getItem('darkModeStatus') === 'true') {
			document.querySelector('#theme').href = `${publicDir}/css/DarkTheme.css`
			document.getElementById('Checkbox').checked = true
		}

		btn.addEventListener('change', function () {
			btn.checked ? document.querySelector('#theme').href = `${publicDir}/css/DarkTheme.css` : document.querySelector('#theme').href = ''
			localStorage.setItem('darkModeStatus', btn.checked)
		})
	}

	render() {
		return (
				<div id={'DarkModeButton'}>
					<input type={'Checkbox'} id={'Checkbox'} style={{ display: 'none' }}/>
					<label htmlFor={'Checkbox'} className={'ToggleBackground'} id={'ToggleBackground'}>
                        <span id={'ToggleButton'}>
                        </span>
					</label>
				</div>
		)

	}
}
