import React from 'react'

const Works = () => {
	return (
			<div className={'Works'}><h1>Небольшие приложения</h1>
				<div className={'WorksPlaceholder'}>
					<a href={'/mousewheelchecker'} className="Card">
						<img src={require('./files/pics/mouse.png')} alt="MouseIcon"/>
						<div className={'CardText'}>
							<h3><b>Mousewheel Check</b></h3>
							<h4>Диагностика колеса мышки</h4>
							<h4>Если вдруг ломается</h4>
						</div>
					</a>
					<a href={'/calculator'} className={'Card'}>
						<img src={require('./files/pics/calculator.png')} alt={'CaloriesIcon'}/>
						<div className={'CardText'}>
							<h3><b>Calculator</b></h3>
							<h4>Нажимай кнопки</h4>
							<h4>Будто снова в школе</h4>
						</div>
					</a>
					<a href={'/gallery'} className={'Card'}>
						<img src={require('./files/pics/paw.png')} alt={'PawIcon'} width={'150px'}/>
						<div className={'CardText'}>
							<h3><b>Gallery</b></h3>
							<h4>Галерея с котами</h4>
							<h4>Ведь все любят котов</h4>
						</div>
					</a>
					<a href={'/snake'} className={'Card'}>
						<img src={require('./files/pics/snake.png')} alt={'ChickenIcon'} width={'180px'}/>
						<div className={'CardText'}>
							<h3><b>Snake</b></h3>
							<h4>Двигай змею по полю</h4>
							<h4>Ешь квадратные колбаски</h4>
						</div>
					</a>
				</div>
			</div>
	)
}

export default Works