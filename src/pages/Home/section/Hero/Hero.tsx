import { Button, Container, Typography, styled } from '@mui/material'; //importar o style e instalar o material ui
import Avatar from '../../../../assets/images/avatar.jpeg'; // Para importar uma imagem
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {
  //executar o style, sempre que for estilizar um componente é necessario inserir esse codigo
  const StyledHero = styled('div')(() => ({
    backgroundColor: 'black',
    height: '100vh',
  }));

  const StyledImg = styled('img')(() => ({
    width: '100%',
    borderRadius: '50%',
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Thayane Oliveira
              </Typography>
              <Typography color="secondary" variant="h2" textAlign="center">
                I'm a front-end developer
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <MailOutlineIcon /> Contact me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
