import { createMuiTheme } from '@material-ui/core/styles';
//import { color } from 'html2canvas/dist/types/css/types/color';

export default createMuiTheme({
  overrides:{
    MuiLink:{
      root:{
        cursor:'pointer'
      }
    }
  },

  palette: {
    primary: {
      light: '#4B5E9D',
      main: '#24346a',
      dark: '#142252',
    },
    secondary: {
      light: '#44A9DF',
      main: '#0990D9',
      dark: '#0473AF',
    },
    error: {
      main: '#DC6262',
    },
    success: {
      main: '#81C784',
    },
    warning: {
      main: '#FFB74D',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
    text: {
      secondary: '#333A41',
      primary: '#333A41',
      disabled: '#7D7C7C',
      hint: '#616F8D',
    },
    divider: '#b4bac9',
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      lineHeight: '32px',
      fontSize: '12px',
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 'bold',
      lineHeight: '34px',
      fontSize: '28px',
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 600,
      lineHeight: '29px',
      fontSize: '24px',
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 600,
      lineHeight: '27px',
      fontSize: '22px',
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 600,
      lineHeight: '24px',
      fontSize: '20px',
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 600,
      lineHeight: '22px',
      fontSize: '18px',
      letterSpacing: 0.02,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: '18px',
      fontSize: '18px',
      letterSpacing: 0.02,
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: '18px',
      fontSize: '16px',
      letterSpacing: 0.02,
    },
    body1: {
      fontWeight: 500,
      lineHeight: '18px',
      fontSize: '14px',
      letterSpacing: 0.02,
    },
    body2: {
      fontWeight: 'regular',
      lineHeight: '20px',
      fontSize: '14px',
      letterSpacing: 0.02,
    },
    body3: {
      fontWeight: 'normal',
      lineHeight: '18px',
      fontSize: '14px',
      letterSpacing: 'normal',
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 500,
      lineHeight: '32px',
      fontSize: '14px',
      letterSpacing: 0.3,
    },
    caption: {
      fontWeight: 'regular',
      lineHeight: '20px',
      fontSize: '12px',
      letterSpacing: 0.01,
    },
    overline: {
      fontWeight: 'regular',
      lineHeight: '20px',
      fontSize: '10px',
      letterSpacing: 0.01,
    },
    primary: {
      main: '#616f8d',
    },
    secondary: {
      main: '#0990d9',
    },
    default: {
      main: '#333a41',
    },
    info: {
      main: '#0990d9',
    },
  },
  shadows: [
    'none',
    '0 1px 18px 0 rgba(0, 0, 0, 0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  contrastThreshold: 3,
  tonalOffset: 0.2,
  barIndicator: {
    width: '34px',
    bgColors: ['red', 'green'],
    fontSize: '12px',
    textColor: '#939393',
  },
});
