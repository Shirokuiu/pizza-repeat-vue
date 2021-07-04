export const generateMap = ({ keys, values, key = "name" }) => {
  let result = [];
  const normalizedKeys = keys.map((item) => item[key]);

  normalizedKeys.forEach((item, index) => {
    result.push([item, values[index]]);
  });

  return Object.fromEntries(result);
};
