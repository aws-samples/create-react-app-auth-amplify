import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logoRodape from '../src/images/logo-rodape.png';
import Grid from '@mui/material/Grid';
function Copyright() {
  return (
    <Typography variant="body2" color="white" align="left">
      {'Copyright © '}
      <Link color="inherit" href="https://kasalive.com/">
       Site
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#292929', py: 10,color:"white" }}>
      <Container maxWidth="lg">
        <Grid container>
        <Grid style={{textAlign:'left',color:'white'}} sm={12} md={6}>
            <img src={logoRodape}/>          
            <Typography variant="h4" align="left" gutterBottom>
              A Kasa do Esporte.
            </Typography>
          
            <Copyright  />
        </Grid>
        <Grid sm={12} md={6}>
          <Grid container>
            <Grid sm={12} md={6}>
              <ul className="menu-footer">
                <li><a href="#">Onde assistir?</a></li>
                <li><a href="#">Campeonatos</a></li>
                <li><a href="#">Times</a></li>
              </ul>
            </Grid>
            <Grid sm={12} md={6}>
            <ul className="menu-footer">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Termos de Uso e Cookies</a></li>
              </ul>
            </Grid>
            </Grid>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
