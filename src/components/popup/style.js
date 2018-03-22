export default ({color}) => ({
  popup: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: color.primaryRGBA,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupWrapper: {
    minWidth: '40%',
    maxWidth: '65%',
    minHeight: '300px',
    maxHeight: '65%',
  },
  popupControls: {},
});
