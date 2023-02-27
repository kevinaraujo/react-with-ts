import style from './style.module.scss'

interface IProps {
    children: any,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

const Button = ({ children, type, onClick }: IProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}
        >
            {children}
        </button>
    )
}

export default Button