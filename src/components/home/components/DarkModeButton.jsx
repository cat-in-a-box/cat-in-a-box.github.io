import React, { Component } from 'react'

export default class DarkModeButton extends Component {
	componentDidMount() {
		let btn = document.getElementById('Checkbox')
		let publicDir = process.env.PUBLIC_URL

		if (localStorage.getItem('darkModeStatus') === 'true') {
			document.querySelector('#theme').href = `${publicDir}/css/DarkTheme.css`
			document.getElementById('Checkbox').checked = true
		}

		// Нажатием кнопки меняем ссылку для css темы со светлой на тёмную, а затем обратно
		// Селектор - id стиля, который назначается в public/index.html
		btn.addEventListener('change', function () {
			btn.checked ? document.querySelector('#theme').href = `${publicDir}/css/DarkTheme.css` : document.querySelector('#theme').href = ''
			localStorage.setItem('darkModeStatus', btn.checked)
		})
	}

	render() {
		return (
				<div id={'DarkModeButton'}>
					<input type={'Checkbox'} id={'Checkbox'} style={{ display: 'none' }}/>
					<label htmlFor={'Checkbox'} className={'Toggle'}>
                        <span>
                            <svg width="10px" height="10px" viewBox="0 0 10 10">
                                <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"/>
                            </svg>
                        </span>
					</label>
				</div>
		)

	}
}
