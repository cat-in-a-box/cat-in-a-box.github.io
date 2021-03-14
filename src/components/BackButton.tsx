import React from 'react'
import { HashLink } from 'react-router-hash-link'

const BackButton = () => {
	return (
		<HashLink className={'BackButton'} to={'/#Works'} scroll={(el) => el.scrollIntoView({ behavior: 'instant' as any})}>
			<button>❮ Вернуться назад</button>
		</HashLink>
	)
};

export default BackButton;
