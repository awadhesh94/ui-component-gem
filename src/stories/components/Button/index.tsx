import {Button} from 'antd'
import { ButtonType } from 'antd/es/button'

export interface ButtonComponentProps{
    type: ButtonType
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({type}) => {
    return <Button type={type}>Button</Button>
}