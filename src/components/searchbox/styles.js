export default theme => (
  {
    search: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    input: {
      minWidth: '600px',
      maxWidth: '650px',
      height: '40px',
      border: `1px solid ${theme.inputBorderColor}`,
      borderRadius: '4px',
      paddingLeft: '8px',
      fontSize: '1em',
    },
    button: {
      border: 'none',
      borderRadius: '10%',
      background: 'none',
      height: '35px',
      lineHeight: '35px',
      width: '35px',
      marginLeft: '10px',
      fontSize: '1em',
      padding: '4px 6px',
      cursor: 'pointer',
      position: 'absolute',
      right: '4px',
    },
  }
);
