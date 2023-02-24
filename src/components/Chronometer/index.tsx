import Button from "../Button"
import Watch from "./Watch"

import style from './style.module.scss'
import { timeToSeconds } from "../../common/utils/time"
import { ITask } from "../../types/ITask"
import { useEffect, useState } from "react"

interface IProps {
    selected: ITask | undefined   
}

const Chronometer = ({ selected }: IProps) => {
    const [time, setTime] = useState<number>()

   useEffect(() => {
    if (selected?.time) {
        setTime(timeToSeconds(selected.time))
    }
   }, [selected])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the chronometer</p>
            Time: {time}
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    )
}

export default Chronometer