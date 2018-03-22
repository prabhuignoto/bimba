export default theme => ({
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    paddingLeft: '10px',
  },
  txt: {
    paddingLeft: '8px',
    color: theme.foreColor,
    background: theme.primaryColor,
  },
});
