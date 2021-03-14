import React, {Component} from 'react'

export default class DarkModeButton extends Component {
    componentDidMount() {
        let btn = document.getElementById('Checkbox') as HTMLInputElement;
        let publicDir = process.env.PUBLIC_URL;
        let theme = document.querySelector('#theme') as HTMLAnchorElement;

        if (localStorage.getItem('darkModeStatus') === 'true') {
            theme.href = `${publicDir}/css/DarkTheme.css`;
            btn.checked = true;
        }

        btn.addEventListener('change', function () {
            btn.checked ? theme.href = `${publicDir}/css/DarkTheme.css` : theme.href = '';
            localStorage.setItem('darkModeStatus', String(btn.checked))
        })
    }

    render() {
        return (
            <div id={'DarkModeButton'}>
                <input type={'Checkbox'} id={'Checkbox'} style={{display: 'none'}}/>
                <label htmlFor={'Checkbox'} className={'ToggleBackground'} id={'ToggleBackground'}>
                        <span id={'ToggleButton'}>
                        </span>
                </label>
            </div>
        )

    }
}
