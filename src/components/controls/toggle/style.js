export default ({ color }) => ({
  toggle: {
    height: '28px',
    padding: 0,
    margin: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    outline: 'none',
  },
  toggleWrapper: {
    width: '55px',
    height: '100%',
    position: 'relative',
    borderRadius: '22px',
    transition: 'all 0.25s ease',
    border: `2px solid ${color.disabledButton}`,
    borderRightRadius: '50%',
  },
  wrapperOn: {
    border: `2px solid ${color.primary}`,
  },
  wrapperOff: {
  },
  toggleButton: {
    boxShadow: '1px 1px 1px rgba(0,0,0, 0.25)',
    border: 'none',
    height: '75%',
    width: '40%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  buttonOn: {
    right: 4,
    background: color.primary,
  },
  buttonOff: {
    left: 4,
    background: color.disabledButton,
  },
  input: {
    display: 'block',
  },
  label: {
    whiteSpace: 'nowrap',
    marginLeft: '10px',
    userSelect: 'none',
    fontSize: '1.25em',
    fontWeight: 'bold',
  },
});
