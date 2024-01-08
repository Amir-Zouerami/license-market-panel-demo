/**
 * Takes an array of objects and adds the value of `id` field as a new property called `key`.
 * @param objects an array of objects
 * @returns modified array of objects with the new `key` field.
 */
export const addKeyToObjects = <T extends Record<string, unknown>>(
  objects: T[]
) => {
  return objects.map(object => ({ ...object, key: object.id }));
};
