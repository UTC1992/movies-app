import { Toolbar, styled } from '@mui/material'

import { theme } from '../../app/theme/themes'

export const ToolbarStyle = styled(Toolbar)(() => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.background.paper,
}))
