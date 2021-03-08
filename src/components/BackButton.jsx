import React from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter(({ history }) => {
	return (
			<header id={'Header'}>
				<div className={'BackButton'} onClick={() => history.goBack()}>
					<button>Вернуться на главную</button>
				</div>
			</header>
	)
})
