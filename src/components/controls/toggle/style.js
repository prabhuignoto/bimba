export default ({ color }) => ({
  toggle: {
    height: '25px',
    width: '50px',
    padding: 0,
    margin: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    outline: 'none',
  },
  toggleWrapper: {
    height: '100%',
    minWidth: '100%',
    position: 'relative',
    borderRadius: '22px',
    // border: `2px solid ${color.disabledButton}`,
    background: '#ccc',
    borderRightRadius: '50%',
  },
  wrapperOn: {
    // border: `2px solid ${color.primary}`,
    background: color.primary,
  },
  wrapperOff: {
  },
  toggleButton: {
    boxShadow: '1px 1px 1px 1px rgba(0,0,0, 0.1)',
    border: 'none',
    height: '72%',
    width: '37%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transition: 'all 0.2s linear',
    left: 0,
    right: 0,
  },
  buttonOn: {
    right: 4,
    left: '55%',
    // background: color.primary,
    background: '#fff',
  },
  buttonOff: {
    left: 4,
    right: '55%',
    // background: color.disabledButton,
    background: '#fff',
  },
  input: {
    display: 'block',
  },
  label: {
    whiteSpace: 'nowrap',
    marginLeft: '10px',
    userSelect: 'none',
  },
});
