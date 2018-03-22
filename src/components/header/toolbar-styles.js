const flex = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default theme => ({
  nav: Object.assign(flex, {
    marginLeft: 'Auto',
    width: '200px',
    marginRight: '20px',
  }),
  list: Object.assign(flex, {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    justifyContent: 'space-between',
  }),
  listItem: {},
  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  content: Object.assign(flex, {}),
  icon: {},
  text: {},
});
