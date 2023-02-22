import React, { useState } from 'react';
import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/ITask';

import style from './style.module.scss'

function App() {
  let [ tasks, setTasks ] = useState<ITask[]>([])

  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks}/>
     <List tasks={tasks}/>
     <Chronometer />
    </div>
  );
}

export default App;
