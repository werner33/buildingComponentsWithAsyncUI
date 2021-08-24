import React from 'react';

import './Button.css';

function Button({label}) {

    const [btnLabel, setBtnLabel] = React.useState(label)

    const changeText = () => {
        setBtnLabel('clicked')
    }

    return (
        <div data-testid="button" className="button-style" onClick={() => changeText()}>
            {btnLabel}
        </div>
    );
}

export default Button;