import React from 'react'

function Contact() {
    return (
        <div id={'Contacts'} className={'Contact'}>
            <h1>Свяжитесь со мной!</h1>
            <p>Просто напишите письмо на</p>
			{/*Implemented some simple protection against email harvesting*/}
            <p className={'FooterEmail'}>
                timo
                <span className={'def'}>bou</span>
                shuk.ale
                <span className={'def'}>eno</span>
                xander@gm
                <span className={'def'}>fam</span>
                ail.com
            </p>

        </div>
    )
}

export default Contact
