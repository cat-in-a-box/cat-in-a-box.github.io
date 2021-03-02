import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

const Contact = () => {
    return (
        <ScrollableAnchor id={'section4'}>
            <div className={"Contact"}>
                <h1>Свяжитесь со мной!</h1>
                <p>Просто напишите письмо на</p>
                <p style={{fontWeight: '500'}}>timoshuk.alexander@gmail.com</p>
            </div>
        </ScrollableAnchor>
    )
};

export default Contact;