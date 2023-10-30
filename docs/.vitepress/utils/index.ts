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

export function getCookieItem(cookie: string | undefined, key: string) {
  if (!cookie) return null;
  const reg = `(?:^| )${key}=([^;]*)(?:;|$)`;
  const r = cookie.match(reg);
  return r ? r[1] : null;
}
