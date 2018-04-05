export default ({color}) => ({
  radio: {
    minWidth: '350px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: '1.25em',
    color: color.primary,
  },
});
