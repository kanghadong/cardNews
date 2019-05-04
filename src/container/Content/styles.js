const styles = theme => ({
    root: {
      paddingTop: '15px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#EDEDED',
      height: '100vh',
    },
    gridList: {
      paddingLeft: '3vw',
      paddingRight: '3vw',
      width: '94vw',
      height: '100vh'
    },
    keyword: {
      fontSize: '20px',
      color: 'black'
    },
    emptyContent: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '60px',
      fontSize: '2em',
    }
  });

export default styles;
