import { ITask } from '../../types/ITask'
import Item from './item'

import style from './style.module.scss'


function List({ tasks }: { tasks: ITask[]}) {
    
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