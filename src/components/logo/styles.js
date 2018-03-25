export default ({ color }) => ({
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
    color: color.text,
    background: color.primary,
  },
});
