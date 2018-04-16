export default ({ color }) => ({
  dropdown: {
    color: color.text,
    position: 'relative',
    height: '35px',
    cursor: 'pointer',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    width: '90%',
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textOverflow: 'hidden',
    userSelect: 'none',
    borderRadius: '3px',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '0.85em',
    position: 'relative',
    // background: 'linear-gradient(to left, rgba(7,145,234,1) 0%, rgba(5,109,177,1) 100%)',
    // background: 'linear-gradient(to right, #144463 0%, #19557c 100%)',
    background: '#19557c',
    marginLeft: '10px',
  },
  label: {
    whiteSpace: 'nowrap',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontWeight: 'bold',
  },
  list: {
    listStyle: 'none',
    position: 'absolute',
    background: '#144463',
    right: 0,
    top: '26px',
    minHeight: '60px',
    padding: 0,
    width: '100%',
    zIndex: '100',
    outline: 'none',
    borderRadius: '3px',
    boxShadow: '0 1px 4px 1px #000',
  },
  listItem: {
    paddingTop: '10px',
    paddingBottom: '10px',
    color: color.text,
    textTransform: 'capitalize',
    textAlign: 'left',
    paddingLeft: '12px',
    fontSize: '1em',
    ':hover': {
      // background: '#04629f',
      background: '#bfdef2',
      color: '#000',
    },
    ':first-child': {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    },
    ':last-child': {
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
    },
  },
  icon: {
    marginLeft: 'auto',
    marginRight: '10px',
    alignSelf: 'center',
    fontSize: '24px',
  },
  selectedValue: {
    width: '100%',
    minWidth: '20px',
    marginLeft: '5px',
    marginRight: '5px',
  },
});
