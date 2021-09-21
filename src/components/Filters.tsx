import { FC } from "react";
import { FormGroup, Paper, makeStyles, Typography} from "@material-ui/core"
import { STOPS } from "./StopsBlock";
import FilterCheckbox from "./FilterCheckbox";

const useStyles = makeStyles(() => ({
    filters: {
        width: '25%',
        padding: '1em',
        height: 'fit-content',
    },
    'filters__title': {
        fontWeight: 600,
        fontSize: '1.2rem',
        marginBottom: '0.5rem'
    }
}));


export interface FiltersProps {
    filters: number[]
    onChange: (label: number) => void
}

const Filters: FC<FiltersProps> = ({ filters, onChange }) => {
    const classes = useStyles()
    return (
        <Paper className={classes.filters}>
            <FormGroup>
                <Typography  component="h5" className={classes['filters__title']}>
                    КОЛИЧЕСТВО ПЕРЕСАДОК
                </Typography>
                {STOPS.map((label, index) => {
                    return (
                        <FilterCheckbox label={label} filters={filters} index={index} key={index} onChange={onChange} />
                    )
                })}  
            </FormGroup>
        </Paper>
    )
}

export default Filters