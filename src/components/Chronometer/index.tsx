import Button from "../Button"
import Watch from "./Watch"

import style from './style.module.scss'
import { timeToSeconds } from "../../common/utils/time"
import { ITask } from "../../types/ITask"
import { useEffect, useState } from "react"

interface IProps {
    selected: ITask | undefined   
    finishTask: () => void
}

const Chronometer = ({ selected, finishTask }: IProps) => {
    const [time, setTime] = useState<number>()

   useEffect(() => {
    if (selected?.time) {
        setTime(timeToSeconds(selected.time))
    }
   }, [selected])

   const regressTime = (counter: number = 0) => {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1)
                return regressTime(counter - 1)
            } else {
                finishTask()
            }
        }, 1000)
   }    

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the chronometer</p>
            Time: {time}
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => {
                regressTime(time)
            }}>
                Iniciar
            </Button>
        </div>
    )
}

export default Chronometer