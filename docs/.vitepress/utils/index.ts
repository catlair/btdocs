export function snakeToCamel(snakeCase: string) {
  return snakeCase.replace(/_([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}

export function camelToSnake(camelCase: string) {
  return camelCase.replace(/[A-Z]/g, function (match) {
    return '_' + match.toLowerCase();
  });
}
