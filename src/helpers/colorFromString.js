import md5 from 'md5';

export const getColorFromString = (str) => `#${md5(str).slice(2, 8)}`;
