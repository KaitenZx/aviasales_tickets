import { Typography, makeStyles, } from "@material-ui/core"
import { FC } from "react"

const useStyles = makeStyles (()=>({
    ticket__line: {
        fontSize: '0.7em',
        color: 'grey',
        
    }
}))

interface LineProps {
    firstValue: string | number
    secondValue?: string
    isUpperLine?: boolean
}

const Line: FC<LineProps> = ({firstValue, secondValue, isUpperLine}) => {
    const classes = useStyles()
    return (
        <>
            {secondValue ? (
                <Typography
                    variant='subtitle1' 
                    component='p'
                    className={isUpperLine ? classes['ticket__line'] : ''}
                >
                    {secondValue} –– {secondValue}
                </Typography>  
                ) : (
                <Typography
                    variant='subtitle1'
                    component='p'
                    className={isUpperLine ? classes['ticket__line'] : ''}
                >
                    {firstValue}
                </Typography>
                )
            }
        </>
    )
}

export default Line