import React from 'react'
import LogoCH from '../images/LogoCH.png'
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: '#white',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
}))

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
})

const Header = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const { currency, setCurrency} = CryptoState()


  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
        <img 
          src={LogoCH} 
          alt='logo'
              style={{
                width: 60,
                padding: 10,
              }}
            />
          <Typography 
            onClick={() => navigate('/')}
            className={classes.title}
            variant='h6'
            >
              CRYPTO HUNTER
            </Typography>

          <Select
            variant='outlined' 
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header