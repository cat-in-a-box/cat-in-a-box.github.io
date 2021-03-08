import React from 'react'

const Works = () => {
	return (
			<div>
				<h1>Мои работы</h1>
				<div className={'Works'}>
					<a href={'https://profdela.ru'} target={'_blank'} rel={'noopener noreferrer'} className={'BigCard'}>
						<img src={require('../files/pics/profdela.png')} alt={'ProfdelaIcon'}/>
						<div>
							<h3><b>Профдела</b></h3>
							<h4>Интернет - магазин</h4>
						</div>
					</a>
					<a href={'https://rick-morty-for-nethouse.netlify.app/'} target="_blank" rel={'noopener noreferrer'} className={'BigCard'}>
						<img src={require('../files/pics/rick-morty.png')} alt={'Rick-MortyIcon'}/>
						<div>
							<h3><b>Персонажи Rick and Morty</b></h3>
							<h4>Работа с REST API на React и Axios</h4>
						</div>
					</a>
				</div>
			</div>
	)
}

export default Works
