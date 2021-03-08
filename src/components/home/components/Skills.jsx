import React from 'react'

const Skills = () => {
	return (
			<div id={'Skills'}>
				<h1>Мои навыки</h1>
				<div className={'Skills'}>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/code.png')} alt={'HTML-CSS'}/>
						<div className={'SkillsPopup'}>HTML и CSS</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/javascript.png')} alt={'JavaScript'}/>
						<div className={'SkillsPopup'}>JavaScript</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/react.png')} alt={'React'}/>
						<div className={'SkillsPopup'}>React</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/responsive.png')} alt={'Adaptive'}/>
						<div className={'SkillsPopup'}>Адаптивность</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/sass.png')} alt={'Preprocessors'}/>
						<div className={'SkillsPopup'}>Sass, SCSS, Less</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/bootstrap.png')} alt={'Bootstrap'}/>
						<div className={'SkillsPopup'}>Bootstrap</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/rest.png')} alt={'RestApi'}/>
						<div className={'SkillsPopup'}>REST API</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/git.png')} alt={'Git'}/>
						<div className={'SkillsPopup'}>Git</div>
					</div>
					<div className={'SkillsIcon'}>
						<img src={require('../files/pics/next.png')} alt={'Next'}/>
						<div className={'SkillsPopup'}>Next.js</div>
					</div>
				</div>
			</div>
	)
}

export default Skills
