
import style from './style.module.scss'

interface IPropsItem {
    task: string, 
    time: string
}

function Item({task, time}: IPropsItem) {
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item