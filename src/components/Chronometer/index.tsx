import Button from "../Button"
import Watch from "./Watch"

import style from './style.module.scss'

const Chronometer = () => {
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