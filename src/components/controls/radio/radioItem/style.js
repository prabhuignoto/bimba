export default ({ color }) => ({
  radioItem: {
    marginLeft: '5px',
    marginRight: '5px',
    width: '100%',
    // paddingLeft: '10px',
    position: 'relative',
    zIndex: 2,
    ':hover': {
      // background: color.secondary,
    },
    ':before': {
      background: '#fff',
      borderRadius: '50%',
      content: '""',
      display: 'inline-block',
      left: 4,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      transition: 'all 0.1s ease',
      height: '20px',
      width: '20px',
      zIndex: -1,
    },
  },
  radioOn: {
    ':before': {
      background: color.primary,
    },
  },
  radioNative: {
    visibility: 'hidden',
    display: 'none',
  },
  radioLabel: {
    cursor: 'pointer',
    width: '100%',
    display: 'block',
    textAlign: 'left',
    paddingLeft: '35px',
    userSelect: 'none',
  },
});
