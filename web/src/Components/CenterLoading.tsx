import { CircularProgress, Stack } from "@mui/material"

interface ICenterLoadingProps {
  label?: string
}

export const CenterLoading = (props: ICenterLoadingProps) => {
  const { label } = props

  return (
    <Stack direction='column' height='100vh' alignItems='center' justifyContent='center' gap='2rem'>
      <CircularProgress size='5rem' />
      {label}
    </Stack>
  )
}