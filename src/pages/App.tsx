import React, { useState } from 'react';
import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/ITask';

import style from './style.module.scss'

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>();

  function selectTask(task: ITask) {
    setSelected(task);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: true
    })))
  }

  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks}/>
     <List 
      tasks={tasks}
      selectTask={selectTask}
     />
     <Chronometer />
    </div>
  );
}

export default App;
