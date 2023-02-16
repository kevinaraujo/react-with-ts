import React from 'react'

import style from './style.module.scss'

class Button extends React.Component<{children: any}>{
    super() {
        this.super();
    }

    render() {
        return (
            <button className={style.botao}>
                { this.props.children }
            </button>
        )
    }
}

export default Button