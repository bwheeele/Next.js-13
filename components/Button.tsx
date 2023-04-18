import { FC } from "react"
import styles from './button.module.css'

interface Button {
    variant: string
}

// const Button = ({variant}: Button) => {
//     return <div></div>
// }

const Button: FC<Button> = ({variant}) => {
    return <div className={styles.button}>click</div>
}

export default Button