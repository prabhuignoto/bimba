export default ({ color }) => ({
  gallery: {
    background: '#000',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  galleryWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    transition: 'all 3s ease',
    justifyContent: 'flex-start',
  },
  searchInProgress: {
  },
  viewerWrapper: {
    display: 'none',
  },
});
