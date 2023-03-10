import React, { useState } from 'react';
import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/ITask';

import style from './style.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id
    })))
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }

        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Chronometer
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
