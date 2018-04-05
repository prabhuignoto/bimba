export default ({color}) => ({
  radio: {
    minWidth: '350px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4px 6px',
    margin: '4px',
    height: '50px',
  },
  radioWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  label: {
    whiteSpace: 'nowrap',
    marginRight: '15px',
    fontWeight: 'bold',
    fontSize: '1em',
    color: color.primary,
  },
});
