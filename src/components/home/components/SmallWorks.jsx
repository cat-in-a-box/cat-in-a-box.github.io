import React from 'react'
import { Link } from 'react-router-dom'

const SmallWorks = () => {
	return (
			<div>
				<h1>Небольшие приложения</h1>
				<div className={'Works'}>
					<Link to={'/mousewheelchecker'} className="Card">
						<img src={require('../files/pics/mouse.png')} alt={"MouseIcon"}/>
						<div>
							<h3><b>Mousewheel Check</b></h3>
							<h4>Диагностика колеса мышки</h4>
							<h4>Если вдруг ломается</h4>
						</div>
					</Link>
					<Link to={'/calculator'} className={'Card'}>
						<img src={require('../files/pics/calculator.png')} alt={'CaloriesIcon'}/>
						<div>
							<h3><b>Calculator</b></h3>
							<h4>Нажимай кнопки</h4>
							<h4>Будто снова в школе</h4>
						</div>
					</Link>
					<Link to={'/gallery'} className={'Card'}>
						<img src={require('../files/pics/paw.png')} alt={'PawIcon'}/>
						<div>
							<h3><b>Gallery</b></h3>
							<h4>Галерея с котами</h4>
							<h4>Ведь все любят котов</h4>
						</div>
					</Link>
					<Link to={'/snake'} className={'Card'}>
						<img src={require('../files/pics/snake.png')} alt={'ChickenIcon'}/>
						<div>
							<h3><b>Snake</b></h3>
							<h4>Двигай змею по полю</h4>
							<h4>Ешь квадратные колбаски</h4>
						</div>
					</Link>
				</div>
			</div>
	)
}

export default SmallWorks
