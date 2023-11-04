import { Box, ThemeProvider } from '@mui/system';
import { Button } from '@mui/material';

const Login = () => {
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
        <Button href="http://localhost:8080/oauth2/authorization/google">Login with Google</Button>
    </Box>
}

export default Login