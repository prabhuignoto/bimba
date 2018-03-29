export default ({ color }) => ({
  thumbnail: {
    alignItems: 'center',
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '2px',
    cursor: 'pointer',
    display: 'flex',
    height: '230px',
    justifyContent: 'center',
    margin: '10px',
    transition: 'all .5s ease',
    width: '230px',
    ':hover': {
      background: 'rgba(0,0,0,0.95)',
      boShadow: '0 0 0 #000',
    },
  },
  thumbnailWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 2,
    height: '80%',
    justifyContent: 'center',
    width: '80%',
  },
  img: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
});
