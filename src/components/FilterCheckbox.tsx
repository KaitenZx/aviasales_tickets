import {FormControlLabel, Checkbox } from "@material-ui/core"
import { FC } from "react"


interface FilterCheckboxProps {
    filters: number[]
    index: number
    onChange: (label: number) => void
    label: string
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({filters, label, index, onChange }) => {
    return (
        <FormControlLabel
            control={
                <Checkbox onChange={() => onChange(index)} color="primary" checked={filters.includes(index)} />
            }
            label={label}
        />
    )
}

export default FilterCheckbox