import { Paper, Typography, makeStyles, Grid } from "@material-ui/core";
import { FC } from "react";
import { TicketProp } from "../App";
import Line from "./Line";
import StopsBlock from "./StopsBlock"
import getTime from "../utils/getTime";
import DurationBlock from "./DurationBlock";

export const useStyles = makeStyles (()=>({
    ticket: {
        padding: '2em 2em 0',
        marginBottom: '1em'
    },
    price: {
        color: '#0c73fe',
        fontWeight: 500,
        
    },
    ticket__block: {
        margin: '1.5em 0',

    },
    column: {
        width: '30%'
    },
    ticket__info: {
        justifyContent: 'space-between'
    },
    ticket__top: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '3em',
        marginBottom: '0.3em'
    }
}))

interface Props {
    ticket: TicketProp
}

const Ticket: FC<Props> = ({ ticket }) => {
    const classes = useStyles()
    const [ timeDepartureTo, timeArriveTo] = getTime(ticket, 0)
    const [ timeDepartureFrom, timeArriveFrom] = getTime(ticket, 1)
    
    const formattedPrice =  ticket.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    const ticketTo = ticket.segments[0]
    const ticketFrom = ticket.segments[1]

    const GetLogo: FC = () => {
        return (
            <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="Logo" />
        )
    }

    return (
        <Paper  className={classes.ticket} >
            <Grid container className={classes['ticket__top']}>
                <Typography component='h5' variant='h5' className={classes.price}> {formattedPrice} P</Typography>
                <GetLogo />
            </Grid>
            <Grid container className={classes['ticket__info']}>
            <Grid className={classes.column}>
                <Grid className={classes['ticket__block']}>
                        <Line firstValue={ticketTo.origin} secondValue={ticketTo.destination}  isUpperLine/>
                        <Line firstValue={timeDepartureTo} secondValue={timeArriveTo} />
                    </Grid>
                    <Grid className={classes['ticket__block']}>
                        <Line firstValue={ticketFrom.origin} secondValue={ticketFrom.destination}  isUpperLine/>
                        <Line firstValue={timeDepartureFrom} secondValue={timeArriveFrom} />
                    </Grid>
                </Grid>

                <Grid className={classes.column}>
                    <DurationBlock duration={ticketTo.duration} />
                    <DurationBlock duration={ticketFrom.duration} />
                </Grid>

                <Grid className={classes.column}>
                    <StopsBlock stops={ticketTo.stops}/>
                    <StopsBlock stops={ticketFrom.stops}/>
                </Grid>
            </Grid>
        </Paper>

    )
}

export default Ticket