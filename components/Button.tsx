import { FC } from "react"

interface Button {
    variant: string
}

// const Button = ({variant}: Button) => {
//     return <div></div>
// }

const Button: FC<Button> = ({variant}) => {
    return <div>click</div>
}

export default Button