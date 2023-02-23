import { ITask } from '../../types/ITask'
import Item from './item'

import style from './style.module.scss'

interface IProps {
    tasks: ITask[],
    selectTask: (task: ITask) => void
}

function List({ tasks, selectTask }: IProps) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Study of the day</h2>
            <ul>
                { tasks.map((item) => (
                    <Item 
                        key={item.id}
                        selectTask={selectTask}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List