import React from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter(({ history }) => {
	return (
			<div className={'Header'}>
				<div className={'HeaderBackButton'} onClick={() => history.goBack()}>
					<button>Вернуться на главную</button>
				</div>
			</div>
	)
})
