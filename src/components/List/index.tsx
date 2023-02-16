import { render } from '@testing-library/react'
import React from 'react'
import Item from './item'

import style from './style.module.scss'

function List() {
    const tasks = [{
        task: 'React',
        time: ' 02:00:00'
    }, {
        task: 'Javascript',
        time: ' 02:00:00'
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Study of the day</h2>
            <ul>
                { tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List