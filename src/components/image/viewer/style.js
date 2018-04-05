export default ({ color }) => ({
  viewer: {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    padding: '5px',
  },
  viewerWrapper: {
    height: '100%',
    width: '100%',
    border: `1px solid ${color.primary}`,
  },
  viewerControls: {},
});
