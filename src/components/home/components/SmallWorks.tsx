import React from 'react'
import { Link } from 'react-router-dom'

const SmallWorks = () => {
	return (
			<div id={'SmallWorks'}>
				<h1>Небольшие приложения</h1>
				<div className={'CardsContainer'}>
					<Link to={'/mousewheelchecker'} className="Card">
						<img src={require('../files/pics/mouse.png')} alt={"MouseIcon"}/>
						<div>
							<h3>Mousewheel Check</h3>
							<p>Диагностика колеса мышки</p>
							<p>Если вдруг ломается</p>
							<p className={'CardTechnologyText'}>React, HTML, TypeScript</p>
						</div>
					</Link>
					<Link to={'/calculator'} className={'Card'}>
						<img src={require('../files/pics/calculator.png')} alt={'CaloriesIcon'}/>
						<div>
							<h3>Calculator</h3>
							<p>Нажимай кнопки</p>
							<p>Будто снова в школе</p>
							<p className={'CardTechnologyText'}>React, HTML, TypeScript</p>
						</div>
					</Link>
					<Link to={'/gallery'} className={'Card'}>
						<img src={require('../files/pics/paw.png')} alt={'PawIcon'}/>
						<div>
							<h3>Gallery</h3>
							<p>Галерея с котами</p>
							<p>Ведь все любят котов</p>
							<p className={'CardTechnologyText'}>React, HTML, SCSS</p>
						</div>
					</Link>
					<Link to={'/snake'} className={'Card'}>
						<img src={require('../files/pics/snake.png')} alt={'ChickenIcon'}/>
						<div>
							<h3>Snake</h3>
							<p>Двигай змею по полю</p>
							<p>Ешь квадратные колбаски</p>
							<p className={'CardTechnologyText'}>React, Canvas, TypeScript</p>
						</div>
					</Link>
				</div>
			</div>
	)
}

export default SmallWorks
