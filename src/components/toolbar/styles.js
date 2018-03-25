const flex = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default ({ color }) => ({
  nav: Object.assign(flex, {
    marginLeft: 'Auto',
    minWidth: '55px',
    marginRight: '25px',
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
    color: color.primary,
    ':hover': {
      color: color.secondary,
    },
  },
  content: Object.assign(flex, {}),
  icon: {
    fontSize: '36px',
  },
  text: {},
});
