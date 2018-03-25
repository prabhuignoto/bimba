export default ({ color }) => ({
  popup: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: color.blackRGBA,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupWrapper: {
    minWidth: '50%',
    maxWidth: '65%',
    minHeight: '450px',
    maxHeight: '65%',
    background: color.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    margin: '0 auto',
    animationName: {
      '0%': {
        top: '-50%',
      },
      '100%': {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    animationDuration: '0.5s',
  },
  popupHeader: {
    height: '50px',
    background: color.primary,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  popupTitle: {
    color: color.text,
    marginLeft: '10px',
    fontSize: '1em',
  },
  popupControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 'auto',
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  closeButton: {
    border: 'none',
    background: 'none',
    fontSize: '30px',
    color: color.secondary,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: '8px',
    cursor: 'pointer',
  },
});
