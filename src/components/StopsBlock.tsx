import { Grid } from "@material-ui/core";
import { FC } from "react";
import Line from "./Line";
import { useStyles } from "./Ticket";

interface StopsProps {
    stops: string[]
}

export const STOPS = ['БEЗ ПЕРЕСАДОК', '1 ПЕРЕСАДКА', '2 ПЕРЕСАДКИ', '3 ПЕРЕСАДКИ']

const StopsBlock: FC<StopsProps> = ({ stops }) => {
    const classes = useStyles()

    const stopsLabel = STOPS[stops.length]

    return (
        <Grid className={classes['ticket__block']}>
            <Line firstValue={stopsLabel}  isUpperLine/>
            <Line firstValue={stops.length > 0 ? stops.join(', ') : '-'}/>
        </Grid>
    )
}

export default StopsBlock