
import { ITask } from '../../../types/ITask'
import style from './style.module.scss'

interface IProps extends ITask {
    selectTask: (task: ITask) => void
}

function Item({
    task,
    time,
    selected,
    completed,
    id,
    selectTask
}: IProps) {
    return (
        <li 
            className={`${style.item} ${selected && style.itemSelecionado} ${completed && style.itemCompletado}`} 
            onClick={
                () => selectTask({
                    task, 
                    time, 
                    selected, 
                    completed, 
                    id
                })
            }>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="task completed"></span>}
        </li>
    )
}

export default Item