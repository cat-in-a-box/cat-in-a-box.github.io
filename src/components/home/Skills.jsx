import React from 'react'

const Skills = () => {
	return (
			<div className={'Skills'}><h1>Мои навыки</h1>
				<div className={'SkillsIconPlaceHolder'}>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/code.png')} alt={'HTML-CSS'}/>
						<div className={'Popup'}>HTML и CSS</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/javascript.png')} alt={'JavaScript'}/>
						<div className={'Popup'}>JavaScript</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/react.png')} alt={'React'}/>
						<div className={'Popup'}>React</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/responsive.png')} alt={'adaptive'}/>
						<div className={'Popup'}>Адаптивность</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/sass.png')} alt={'Preprocessors'}/>
						<div className={'Popup'}>Sass, SCSS, Less</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/bootstrap.png')} alt={'Bootstrap'}/>
						<div className={'Popup'}>Bootstrap</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/git.png')} alt={'Git'}/>
						<div className={'Popup'}>Git</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('./files/pics/next.png')} alt={'Next'}/>
						<div className={'Popup'}>Next.js</div>
					</div>
				</div>
			</div>
	)
}

export default Skills
