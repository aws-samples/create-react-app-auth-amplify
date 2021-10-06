import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Button from '@mui/material/Button';

import imgPost1 from '../src/images/img1.jpg';
import imgPost2 from '../src/images/img2.jpg';
import imgPost3 from '../src/images/img3.png';
import imgPost4 from '../src/images/img4.png';
import logoTimeA from '../src/images/sao_paulo.png';
import logoTimeB from '../src/images/real_madri.png';
import globoIcon from '../src/images/globo.png';
import sportvIcon from '../src/images/sportv.png';
import premiereIcon from '../src/images/premiere.png';
import adidasIcon from '../src/images/adidas.png';

import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { breadcrumbsClasses, Stack } from '@mui/material';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import WeekIcon from '@mui/icons-material/CalendarViewWeekOutlined';
import FlagIcon from '@mui/icons-material/FlagOutlined';
import EuroIcon from '@mui/icons-material/EuroSharp';
import StarIcon from '@mui/icons-material/StarBorderOutlined';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

Amplify.configure(aws_exports);


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const jogosDoDia = [
  {
    date: 'Hoje 10:00',
    status: 'passed',
    timeA: 'São Paulo',
    golsTimeA:2,
    golsTimeB:3,
    timeB: 'Real Madrid',
    canais: ['Globo','Premiere','SporTv']
  },
  {
    date: 'Hoje 10:00',
    status: 'live',
    timeA: 'São Paulo',
    golsTimeA:2,
    golsTimeB:3,
    timeB: 'Real Madrid',
    canais: ['Globo','Premiere','SporTv']
  },
  {
    date: 'Hoje 10:00',
    status: 'live',
    timeA: 'São Paulo',
    golsTimeA:2,
    golsTimeB:3,
    timeB: 'Real Madrid',
    canais: ['Globo','Premiere','SporTv']
  },
]

const featuredPosts = [
  {
    title: 'Acompanhe o jogos do São Paulo essa semana',
    date: '10 de outrubro',
    patrocinio: 'Adidas',
    background: imgPost1,
    imageLabel: 'Image Text',
  },
  {
    title: 'Acompanhe o jogos do São Paulo essa semana',
    date: '10 de outrubro',
    patrocinio: 'Adidas',
    background: imgPost2,
    imageLabel: 'Image Text',
  },
  {
    title: 'Acompanhe o jogos do São Paulo essa semana',
    date: '10 de outrubro',
    patrocinio: 'Adidas',
    background: imgPost3,
    imageLabel: 'Image Text',
  },
  {
    title: 'Acompanhe o jogos do São Paulo essa semana',
    date: '10 de outrubro',
    patrocinio: 'Adidas',
    background: imgPost4,
    imageLabel: 'Image Text',
  },
];


const jogosEmAlta = [
  {
    title: 'São Paulo x Real Madri',
    date: 'HOJE ÀS 10:00',
    logoTimeA: logoTimeA,
    logoTimeB: logoTimeB,  
    canal: 'Globo'
  },
  {
    title: 'São Paulo x Real Madri',
    date: 'HOJE ÀS 10:00',
    logoTimeA: logoTimeA,
    logoTimeB: logoTimeB,
    canal: 'Globo'
  },
  {
    title: 'São Paulo x Real Madri',
    date: 'HOJE ÀS 10:00',
    logoTimeA: logoTimeA,
    logoTimeB: logoTimeB,
    canal: 'Globo'
  },
  {
    title: 'São Paulo x Real Madri',
    date: 'HOJE ÀS 10:00',
    logoTimeA: logoTimeA,
    logoTimeB: logoTimeB,
    canal: 'Globo'
  },{
    title: 'São Paulo x Real Madri',
    date: 'HOJE ÀS 10:00',
    logoTimeA: logoTimeA,
    logoTimeB: logoTimeB,
    canal: 'Globo'
  }
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();
class App extends Component {

  filterSponsor(sponsor){
    switch (sponsor) {
      case 'Adidas':
        return adidasIcon        
      case 'Globo':
        return globoIcon              
      case 'Premiere':
        return premiereIcon
      default:
        break;
    }
  }

  filterChannel(channel){
    switch (channel) {
      case 'SporTv':
        return sportvIcon        
      case 'Globo':
        return globoIcon              
      case 'Premiere':
        return premiereIcon
      default:
        break;
    }
  }

  filterStatus(status){
    switch (status) {
      case 'Ao Vivo':
        return '<p className="liveLabel">° Ao Vivo</p>';        
      case 'Já passou':
        return '<p className="passed">já passou</p>';
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        {/* <AmplifySignOut /> */}
      <Header/>
       <ThemeProvider theme={theme}>
   
       <Container maxWidth="lg">
       
     
          <Box sx={{ flexGrow: 1 }}>
            <Grid marginTop={3} marginBottom={5} container spacing={2}>
           
              <Grid style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'start'}} alignItems="start" item xs={4}>
              <h1> Nós chegamos pra você nunca mais perder um jogo.</h1>
              <Button className="btn-cadastrar"><p>Cadastrar minha conta</p></Button>
              </Grid>

              <Grid item xs={8}>
              <Swiper
                spaceBetween={7}
                slidesPerView={3}
                autoplay
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              > 
                {featuredPosts.map((post) => (
               <SwiperSlide>
                 {post.patrocinio?
                  <div className="patrocinio">OFERECIDO POR:<img style={{marginLeft:5}} src={this.filterSponsor(post.patrocinio)}/></div>
                  :''}
                 <h1 className="title-banner">{post.title}</h1>
                 <div className="blacklayer"></div>
                 <div className="bkg-banner-home" style={{borderRadius:5, backgroundImage: `url(${post.background})`}}/>
               </SwiperSlide>
            ))}
              </Swiper>     
              </Grid>
            </Grid>
          </Box>
       
      </Container>
      <div style={{backgroundColor:"#e7e7e7"}}>
        
        <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
           <Stack direction="row" marginTop={7} spacing={1}>
              <Chip className="chipFilter" icon={<CalendarIcon fontSize="small"/>} label="Jogos do Dia" />
              <Chip className="chipFilter" icon={<WeekIcon fontSize="small" />} label="Jogos da Semana" />
              <Chip className="chipFilter" icon={<FlagIcon fontSize="small" />} label="Brasileiros" />
              <Chip className="chipFilter" icon={<EuroIcon fontSize="small" />} label="Europeus" />
              <Chip className="chipFilter" icon={<StarIcon fontSize="small" />} label="Seleção dos Experts" />
            </Stack>       
           
            <Grid item xs={12} textAlign="left" marginTop={3}>
               <Grid marginBottom={2}><h3 marginBottom>Jogos em Alta</h3></Grid>
               <Swiper                
                spaceBetween={10}
                slidesPerView={4}
                autoplay="true"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                > 
                {jogosEmAlta.map((post) => (
              
              <SwiperSlide className="cardJogosEmAlta">
              
                 <Typography sx={{textAlign:'left', fontSize: 14, fontWeight:'bold',paddingTop:2}} color="black" gutterBottom>
                 {post.date}
                </Typography>
                
                 <Stack direction="row" marginTop={3}>
                   <Stack direction="row" spacing={2}>
                    <div className="brasao-time" style={{backgroundImage: `url(${post.logoTimeA})`}}/>
                    <div className="brasao-time" style={{backgroundImage: `url(${post.logoTimeB})`}}/>
                   </Stack>
                   <p className="nomeJogo">{post.title}</p>
                 </Stack>
               
             

                 
                  <Grid marginTop={3} paddingTop={2} borderTop={1} borderColor="#e7e7e7" container alignItems="center" justifyContent="space-between">
                    <div style={{display:"flex"}}>
                        <p className="lbl-small" marginRight={10}>Assista na TV</p>
                        <div>{post.canal==="Globo"}<img src={globoIcon} alt="Globo"/></div>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                      <Button size="small"> <NavigateNextIcon /> </Button>
                    </div>
                  </Grid>
               

               </SwiperSlide>
            ))}
              </Swiper>     
            </Grid>           

            <Grid item xs={12} textAlign="left" marginTop={2}>
               <Stack direction="row" justifyContent="space-between"> 
                 <Stack flex flexDirection="row"><h3>Jogos do </h3><h3 style={{color:'green'}}>&nbsp;Dia</h3></Stack>

                  <Stack direction="row" marginTop={3} marginBottom={2} spacing={3} justifyContent="flex-end" alignContent="baseline" alignItems="center">
                    <p className="filterChamps selected">Todos os Jogos</p>
                    <p className="filterChamps">Série A</p>
                    <p className="filterChamps">Copa do Brasil</p>
                    <p className="filterChamps">Libertadores</p>
                    <p className="filterChamps">Sulamérica</p>
                  </Stack>
                </Stack>
               
               <div className="wrap-champ">                
                 <ul>
                   <li>
                      <Stack direction="row" marginBottom={2} spacing={1} justifyContent="flex-start" alignItems="center">
                        <h2>Brasileirão Série A</h2>
                        <NavigateNextIcon />
                        <Chip variant="contained" label="Oitavas de final" />
                     </Stack>
                   </li>
                 {jogosDoDia.map((post) => (
                    <li>
                      
                      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
                       <Stack direction="column">
                          <p className="txt-small-strong">{post.date}</p>
                          {post.status ==="passed"?<p className="passed">Já passou</p>:''}
                          {post.status ==="live"?<p className="live">° Ao Vivo</p>:''}
                      </Stack>
                      
                      
                      <Stack direction="row" spacing={1} alignItems="center">
                        <div className="brasao-time" style={{backgroundImage: `url(${logoTimeA})`}}/>
                        <p className="teamName">{post.timeA}</p>&nbsp;&nbsp;<p><strong>{post.golsTimeA}</strong></p>
                        <span className="game-divider">x</span>
                        <p><strong>{post.golsTimeB}</strong></p>&nbsp;&nbsp; <p className="teamName">{post.timeB}</p>
                        <div className="brasao-time" style={{backgroundImage: `url(${logoTimeB})`}}/>
                     </Stack>

                      <Stack direction="row" spacing={3} alignItems="center">
                        {post.canais?post.canais.map((item) => (
                          <img src={this.filterChannel(item)} />
                        )):''}
                      </Stack>
                      <NavigateNextIcon />
                      </Stack>                                                    
                    </li>
                   ))}
                  </ul>
                </div>

                <div className="wrap-champ">                
                 <ul>
                   <li>
                      <Stack direction="row" marginBottom={2} spacing={1} justifyContent="flex-start" alignItems="center">
                        <h2>Brasileirão Série B</h2>
                        <NavigateNextIcon />
                        <Chip variant="contained" label="Oitavas de final" />
                     </Stack>
                   </li>
                 {jogosDoDia.map((post) => (
                    <li>
                      
                      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
                       <Stack direction="column">
                          <p className="txt-small-strong">{post.date}</p>
                          {post.status ==="passed"?<p className="passed">Já passou</p>:''}
                          {post.status ==="live"?<p className="live">° Ao Vivo</p>:''}
                      </Stack>
                      
                      
                      <Stack direction="row" spacing={1} alignItems="center">
                        <div className="brasao-time" style={{backgroundImage: `url(${logoTimeA})`}}/>
                        <p className="teamName">{post.timeA}</p>&nbsp;&nbsp;<p><strong>{post.golsTimeA}</strong></p>
                        <span className="game-divider">x</span>
                        <p><strong>{post.golsTimeB}</strong></p>&nbsp;&nbsp; <p className="teamName">{post.timeB}</p>
                        <div className="brasao-time" style={{backgroundImage: `url(${logoTimeB})`}}/>
                     </Stack>

                      <Stack direction="row" spacing={3} alignItems="center">
                        {post.canais?post.canais.map((item) => (
                          <img src={this.filterChannel(item)} />
                        )):''}
                      </Stack>
                      <NavigateNextIcon />
                      </Stack>                                                    
                    </li>
                   ))}
                  </ul>
                </div>
            </Grid>       
          </Grid>
        </Box>

          </Container>
      </div>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
        
      </div>
    );
  }
}

export default withAuthenticator(App);
