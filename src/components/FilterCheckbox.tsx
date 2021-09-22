import {FormControlLabel, Checkbox, makeStyles } from "@material-ui/core"
import { FC } from "react"

const useStyles = makeStyles (() => ({
    light: {
        '&:hover': {
            backgroundColor: 'lightblue'
        }
    }
}))


interface FilterCheckboxProps {
    filters: number[]
    index: number
    onChange: (label: number) => void
    label: string
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({filters, label, index, onChange }) => {
    const classes = useStyles()
    return (
        <FormControlLabel
            className = {classes.light}
            control={
                <Checkbox onChange={() => onChange(index)} color="primary" checked={filters.includes(index)} />
            }
            label={label}
        />
    )
}
export default FilterCheckbox