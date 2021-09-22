import Line from './Line'
import { Grid } from "@material-ui/core";
import { FC } from "react";
import { useStyles } from "./Ticket";

interface DurationProps {
    duration: number
}

const DurationBlock: FC<DurationProps> = ({ duration }) => {
    const classes = useStyles()

    return(
        <Grid className={classes['ticket__block']}>
            <Line firstValue="В ПУТИ" isUpperLine/>
            <Line firstValue={`${Math.trunc(duration/60)}ч ${duration%60}мин`} />
        </Grid>
    )
}
export default DurationBlock