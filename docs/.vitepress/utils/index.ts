import { isEqual, isObject, transform, isArray } from 'lodash-es';

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

/**
 * Deep diff between two object, using lodash
 */
export function difference(object, base) {
  function changes(object, base) {
    return transform(object, function (result: any, value, key) {
      if (!isEqual(value, base[key])) {
        // 如果是数组则无需递归
        result[key] = isArray(value)
          ? value
          : isObject(value) && isObject(base[key])
          ? changes(value, base[key])
          : value;
      }
    });
  }
  return changes(object, base);
}
