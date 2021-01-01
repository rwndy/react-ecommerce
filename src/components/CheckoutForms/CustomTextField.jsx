import { TextField, Grid } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({name, label, required}) => {
  const { control } = useFormContext()
  return (
    <Grid item xs={12} sm={6}>
      <Controller 
        as={TextField}
        name={name}
        label={label}
        required={required}
        control={control}
        fullWidth
      />
    </Grid>
  )
}

export default FormInput