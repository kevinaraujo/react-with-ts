import Button from "../Button"
import Watch from "./Watch"

import style from './style.module.scss'
import { timeToSeconds } from "../../common/utils/date"

const Chronometer = () => {
    console.log('converstion', timeToSeconds('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    )
}

export default Chronometer