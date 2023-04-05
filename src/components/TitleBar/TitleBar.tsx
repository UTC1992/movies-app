import { Box, Typography } from '@mui/material'

import { ToolbarStyle } from './styles'

interface ITitleBarProps {
  title: string
}

const TitleBar: React.FC<ITitleBarProps> = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToolbarStyle>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </ToolbarStyle>
    </Box>
  )
}

export default TitleBar