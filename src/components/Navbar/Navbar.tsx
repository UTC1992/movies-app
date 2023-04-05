import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import { SpanStyle } from './styles'

const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DEMO Streaming
          </Typography>
          <Button color="inherit">
            <SpanStyle>
              Login
            </SpanStyle>
          </Button>
          <Button variant='contained' color="secondary">
            <SpanStyle>
              Start your free trial
            </SpanStyle>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar