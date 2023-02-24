import style from  './style.module.scss'

interface IProps {
    time: number | undefined
}

const Watch = ({ time = 0}: IProps) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteTen, minuteUnity] = String(minutes).padStart(2,'0')
    const [secondTen, secondUnity] = String(seconds).padStart(2,'0')

    return (
        <>
            <span className={style.relogioNumero}>{minuteTen}</span>
            <span className={style.relogioNumero}>{minuteUnity}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondTen}</span>
            <span className={style.relogioNumero}>{secondUnity}</span>
        </>
    )
}

export default Watch