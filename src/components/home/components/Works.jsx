import React from 'react'

const Works = () => {
	return (
			<div id={'Works'}>
				<h1>Мои работы</h1>
				<div className={'CardsContainer'}>
					<a href={'https://profdela.ru'} target={'_blank'} rel={'noopener noreferrer'} className={'BigCard'}>
						<img src={require('../files/pics/profdela.png')} alt={'ProfdelaIcon'}/>
						<div>
							<h3>Профдела</h3>
							<p>Интернет - магазин</p>
						</div>
					</a>
					<a href={'https://rick-morty-for-nethouse.netlify.app/'} target="_blank" rel={'noopener noreferrer'} className={'BigCard'}>
						<img src={require('../files/pics/rick-morty.png')} alt={'Rick-MortyIcon'}/>
						<div>
							<h3>Персонажи Rick and Morty</h3>
							<p>Работа с REST API на React и Axios</p>
						</div>
					</a>
				</div>
			</div>
	)
}

export default Works
