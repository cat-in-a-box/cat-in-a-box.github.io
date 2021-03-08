import React from 'react'

const Face = () => {
	return (
			<div id ={'Face'}>
				<img className={'faceImg'} src={require('../files/pics/face.jpg')} alt={'face'}/>
				<h1>Меня зовут Александр Тимощук</h1>
				<h2>Front End разработчик</h2>
			</div>
	)
}

export default Face
