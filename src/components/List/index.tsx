import { render } from '@testing-library/react'
import React from 'react'

import style from './style.module.scss'

function List() {
    const tasks = [{
        task: 'React',
        time: ' 02:00:00'
    }, {
        task: 'Javascript',
        time: ' 01:00:00'
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Study of the day</h2>
            <ul>
                { tasks.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List