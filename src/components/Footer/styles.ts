import { Box, Divider, Toolbar, styled } from '@mui/material'
import Link from 'next/link'

import { theme } from '../../app/theme/themes'

export const MenuListStyle = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}))

export const MenuItemStyle = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '0.5rem',
}))

export const LiStyle = styled('li')(() => ({
  display: 'inline-block',
  borderRightWidth: 1,
  borderRightColor: theme.palette.background.paper,
  borderRightStyle: 'solid',
}))

export const ToolbarStyle = styled(Toolbar)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  height: '18rem',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.background.paper,
}))

export const LinkStyle = styled(Link)(() => ({
  textDecoration: 'none',
  color: theme.palette.background.paper,
}))

export const DividerStyle = styled(Divider)(() => ({
  borderColor: theme.palette.background.paper,
  marginRight: '0.5rem',
}))

export const RowStyle = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
}))

export const ContainerSocialIconsStyle = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  columnGap: '1.5rem',
}))
