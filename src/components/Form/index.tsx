import React, { ReactText, useState } from 'react'
import { ITask } from '../../types/ITask'
import Button from '../Button'
import style from './style.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface IProps {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form = ({ setTasks }: IProps) => {
    const [task, setTask] = useState('')
    const [time, setTime] = useState('00:00:00')

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );

        setTask('')
        setTime('00:00:00')
    }


    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Add a new study</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="What you want to study?"
                    required
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    step="1"
                    id="time"
                    name="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <Button type="submit">
                Add
            </Button>
        </form>
    )
}

export default Form