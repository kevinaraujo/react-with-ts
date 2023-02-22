import React, { ReactText } from 'react'
import { ITask } from '../../types/ITask'
import Button from '../Button'
import style from './style.module.scss'
import { v4 as uuidv4 } from 'uuid'

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        time: '00:00:00',
        task: ''
    }

    addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );

        this.setState({
            time: '00:00:00',
            task: ''
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Add a new study</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What you want to study?"
                        required
                        value={this.state.task}
                        onChange={(e) => this.setState({...this.state, task: e.target.value})}
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
                        value={this.state.time}
                        onChange={(e) => this.setState({ ...this.state, time: e.target.value })}
                    />
                </div>
                <Button type="submit">
                    Add
                </Button>
            </form>
        )
    }
}

export default Form