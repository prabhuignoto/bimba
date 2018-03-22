import { css } from 'react-with-styles';

export function SpreadClassNames(styles) {
  const result = Object.entries(styles).reduce((acc, item) => Object.assign(acc, {
    [item[0]]: css(item[1]),
  }), {});
  return result;
}

export function toDummy(test) {
  return test;
}
