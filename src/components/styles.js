import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  buttonBlack: {
    backgroundColor: 'white',
    border: '1.5px solid black',
    borderRadius: '4rem',
    height: '2.5rem',
    width: '9rem',
    margin: '1rem',
    outline: 'none',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
    '@media screen and (max-width: 480px)': {
      width: '6.8rem',
      height: '2.2rem',
      fontSize: '0.7rem',
    },
  },

  buttonPink: {
    backgroundColor: 'hotpink',
    border: 'none',
    borderRadius: '4rem',
    height: '2.5rem',
    width: '9rem',
    margin: '1rem',
    color: 'white',
    outline: 'none',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'rebeccapurple',
      color: 'white',
    },
    '@media screen and (max-width: 480px)': {
      width: '6.8rem',
      height: '2.2rem',
      fontSize: '0.7rem',
    },
  },
  controls: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '4rem 1rem',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    '@media screen and (max-width: 480px)': {
      fontSize: '1rem',
      textAlign: 'center',
    },
  },
  errorMessage: {
    color: 'red',
    fontStyle: 'italic',
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
  },
  box: {
    width: '18rem',
    height: '20rem',
    border: '0.1rem solid orange',
    padding: '1.8rem',
    borderRadius: '5rem',
    textAlign: 'center',
    '@media screen and (max-width: 480px)': {
      width: '16rem',
      height: '21rem',
    },
    '& h2': {
      color: '#34ebe5',
    },
    '& h4': {
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    '& a': {
      textDecoration: 'none',
      color: 'white',
      cursor: 'pointer',
      backgroundColor: 'orange',
      padding: '0.4rem 0.6rem',
      textTransform: 'uppercase',
    },
    '& a:hover': {
      color: '#eb6b34',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    '& span': {
      color: '#34b1eb',
    },
    '& p': {
      color: '#666464',
    },
    '& div': {
      paddingTop: '1.3rem',
    },
  },
});
