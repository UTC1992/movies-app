import { Box, Card, Typography, styled } from '@mui/material'

import { theme } from '../../app/theme/themes'

export const ContainerCardStyle = styled(Box)(() => ({
  cursor: 'pointer',
}))

export const CardTitleStyle = styled(Card)(() => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.background.paper,
  height: 200,
  width: 150,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  backgroundImage: `url('/placeholder.png')`,
  backgroundSize: 'fil',
  backgroundPosition: 'center center',
}))

export const TextStyle = styled(Typography)(() => ({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '20pt',
}))
