import { Box, styled } from '@mui/material'

import Image from 'next/image'

import { theme } from '../../app/theme/themes'

export const ContainerCardStyle = styled(Box)(() => ({
  cursor: 'pointer',
  height: 200,
  width: 150,
  opacity: 1,
  '&:hover': {
    opacity: 0.8,
  },
}))

export const ContainerImageStyle = styled(Box)(() => ({
  backgroundColor: theme.palette.secondary.main,
  height: 200,
  width: 150,
}))

export const ImageStyle = styled(Image)(() => ({
  borderRadius: '4px',
}))
