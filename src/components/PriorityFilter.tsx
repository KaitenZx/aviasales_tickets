import { FC } from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import { Priority } from "../App";

const useStyles = makeStyles(() => ({
    active: {
        backgroundColor: '#0c73fe',
        
    },

    filter__tab: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px 0 0 12px',
        '&:last-child': {
            borderRadius: '0 12px 12px 0'
        }
    },

    filter__priority: {
        display: 'flex',
        flexDirection: 'row',
        height: '4rem',
        width: '100%',
        borderRadius: 15,
        marginBottom: '2em',
    }
}))

export interface PriorityProps {
    setTab: (tab: Priority) => void
    active: Priority
}

const PriorityFilter: FC<PriorityProps> = ({setTab, active}) => {
    const classes = useStyles()

    return (
        <Grid className={classes['filter__priority']}>
            <Paper
             onClick={() => setTab('cheap')} 
             className={`${classes.filter__tab} ${active === 'cheap' ? classes.active : ''}`} >
                 САМЫЙ ДЕШЕВЫЙ 
            </Paper>
            <Paper
             onClick={() => setTab('fast')} 
             className={`${classes.filter__tab} ${active === 'fast' ? classes.active : ''}`} >
                 САМЫЙ БЫСТРЫЙ 
            </Paper>
        </Grid>
    )
}

export default PriorityFilter