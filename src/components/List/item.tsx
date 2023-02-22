
import { ITask } from '../../types/ITask'
import style from './style.module.scss'

function Item({task, time, selected, completed, id}: ITask) {
    console.log('novo item:', {task, time, selected, completed, id})
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item