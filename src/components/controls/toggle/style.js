export default ({ color }) => ({
  toggle: {
    width: '45px',
    height: '20px',
    padding: 0,
    margin: '5px',
    cursor: 'pointer',
  },
  toggleWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: '1px',
    transition: 'all 0.5s',
  },
  wrapperOn: {
    background: color.highlight,
  },
  wrapperOff: {
    background: color.primary,
  },
  toggleButton: {
    boxShadow: '1px 1px 1px rgba(0,0,0, 0.25)',
    border: 'none',
    height: '70%',
    width: '30%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '2px',
    pointerEvents: 'none',
  },
  buttonOn: {
    right: 5,
    background: color.primary,
  },
  buttonOff: {
    left: 5,
    background: color.secondary,
  },
  input: {
    display: 'block',
  },
});
