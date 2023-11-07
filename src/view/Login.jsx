import { Box, ThemeProvider } from '@mui/system';
import { Button } from '@mui/material';
import { GOOGLE_AUTH_URL } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ACCESS_TOKEN } from '../constants'

const Login = ({ authenticated }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        navigate('/')
    }
}, [])

  return <Box
          sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
              bgcolor: 'primary.dark',
          },
          }}
      >
          {/* <Button href="https://clipboard-app-backend-16c2583d149e.herokuapp.com/oauth2/authorization/google">Login with Google</Button> */}
          <Button href={GOOGLE_AUTH_URL}>Login with Google</Button>
      </Box>
  }
  

export default Login