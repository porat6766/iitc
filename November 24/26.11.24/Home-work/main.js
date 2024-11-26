// # Exercises

// ### **Spread Operator with Arrays**

// ### **Basic Array Operations (Beginner)**

// 1. **Exercise**: Create a new array by copying an existing array using the spread operator.

//     **Hint**: Use `[...array]` to spread elements of `array` into a new array.

// const newArray = [...array, 5];

// console.log(newArray);

// 2. **Exercise**: Combine two arrays into one using the spread operator.

//     **Hint**: Use `[...array1, ...array2]` to merge both arrays into a new array.

// console.log([...array1, ...array2]);

// 3. **Exercise**: Add new elements to the beginning of an array using the spread operator.

//     **Hint**: Combine the new element(s) with the existing array: `[newElement, ...array]`.
// console.log([0, ...array1]);

// 4. **Exercise**: Add new elements to the end of an array using the spread operator.

//     **Hint**: Combine the existing array with the new element(s): `[...array, newElement]`.
// console.log([...array1, 10]);

// 5. **Exercise**: Merge three arrays into a single array using the spread operator.

//     **Hint**: Use `[...array1, ...array2, ...array3]`.

// console.log([...array1, ...array2, ...array3]);

// 6. **Exercise**: Copy an array and add a single element to it.

//     **Hint**: Use `[...array, newElement]`.

// console.log([...array1, 10]);

// 7. **Exercise**: Remove the first element of an array and create a new array with the rest using the spread operator.

//     **Hint**: Use `array.slice(1)` or `[...array.slice(1)]`.

// console.log([...array1.slice(1)]);

// 8. **Exercise**: Create a new array by copying only the last three elements of an array.

//     **Hint**: Use `array.slice(-3)` to get the last three elements, then spread them.

// console.log([...array1.slice(-3)]);

// 9. **Exercise**: Reverse an array without mutating the original array using the spread operator.

//     **Hint**: Combine `[...array]` and `.reverse()`.
// console.log([...array1.reverse()]);

// 10. **Exercise**: Replace the second element of an array with a new value while keeping the rest unchanged.

//     **Hint**: Use `[array[0], newValue, ...array.slice(2)]`.
// console.log([array2[0], 30, ...array2.slice(2)]);

// ---

// ### **Practical Scenarios (Intermediate)**

// 1. **Exercise**: Spread the characters of a string into an array of individual letters.

//     **Hint**: Use `[...string]` to convert the string into an array of characters.

// const word = "PORAT";
// console.log([...word]);

// 2. **Exercise**: Flatten a nested array (one level deep) using the spread operator.

//     **Hint**: Spread the nested arrays: `[...array1, ...array2]`.

// console.log([...array1, ...array2]);

// 3. **Exercise**: Create a new array that contains all elements from an array except for the last one.

//     **Hint**: Use `array.slice(0, -1)` to exclude the last element.

// console.log([...array1.slice(0, -1)]);

// 4. **Exercise**: Insert an element at the third position of an array without mutating the original array.

//     **Hint**: Combine slices with the new element: `[...array.slice(0, 2), newElement, ...array.slice(2)]`.

// console.log([...array1.slice(0, 2), 100, ...array1.slice(2)]);

// 5. **Exercise**: Use the spread operator to de-duplicate an array.

//     **Hint**: Convert the array to a `Set` and back: `[...new Set(array)]`.
// const combine = [...array1, ...array2, ...array3];
// console.log([...new Set(combine)]);

// 6. **Exercise**: Extract the middle elements of an array into a new array using the spread operator.

//     **Hint**: Use `slice` to select the middle range, e.g., `array.slice(1, -1)`.

// console.log(...array1.slice(1, 3));

// 7. **Exercise**: Rotate an array (move the first element to the last position).

//     **Hint**: Use `[...array.slice(1), array[0]]`.

// console.log([...array1.slice(1), array1[0]]);

// 8. **Exercise**: Combine elements of an array with a string as the first element (e.g., `["Hello", ...array]`).

//     **Hint**: Use `[string, ...array]`.

// console.log(["vfhgdcsjb", ...array1]);

// 9. **Exercise**: Create a function `mergeArrays` that accepts multiple arrays as arguments and returns one combined array.

// const array1 = [1, 2, 3, 4, 5, 6, 7];
// const array2 = [5, 6, 7, 8];
// const array3 = [5, 6, 12, 11];

//     **Hint**: Use `...args` in the function signature and `[].concat(...args)` inside.

// const merge = (...arrays) => {
//   return [].concat(...arrays);
// };

// console.log(merge(array1, array2, array3));

// 10. **Exercise**: Create a copy of an array and shuffle its elements randomly.

//     **Hint**: Copy the array with `[...array]` and use `.sort(() => Math.random() - 0.5)`.

// console.log(
//   [...array1].sort(() => {
//     return Math.random() - 0.5;
//   })
// );

// ---

// ### **Spread Operator with Objects**

// ### **Basic Object Operations (Beginner)**

// 1. **Exercise**: Create a new object by copying an existing object using the spread operator.

//     **Hint**: Use `{...object}` to spread the properties into a new object.

// console.log({ ...products });

// 2. **Exercise**: Merge two objects into a single object using the spread operator.

//     **Hint**: Use `{...object1, ...object2}` to combine them.
// console.log({ ...products, ...users });

// 3. **Exercise**: Create a copy of an object and update one of its properties.

//     **Hint**: Use `{...object, property: newValue}`.

// console.log({ ...products, davis: "gghjkjk" });

// 4. **Exercise**: Add a new property to an object copy while leaving the original unchanged.

//     **Hint**: Use `{...object, newProperty: value}`.
// console.log({ ...products, haim: "ghghbjghjkjk" });

// 5. **Exercise**: Merge three objects into a single object using the spread operator.

//     **Hint**: Use `{...object1, ...object2, ...object3}`.
// console.log({ ...products, ...users, ...cars });

// 6. **Exercise**: Create a shallow copy of an object using the spread operator.

//     **Hint**: Use `{...object}`.

// const newCarsOBJ = { ...cars };
// console.log(newCarsOBJ);

// 7. **Exercise**: Remove a property from an object by creating a new object without that property.

//     **Hint**: Use destructuring and the rest operator: `const {prop, ...rest} = object`.

// const { Laptop, ...pr } = products;

// console.log(pr);

// 8. **Exercise**: Swap the values of two properties in an object using the spread operator.

//     **Hint**: Use destructuring and the spread operator to create a new object with swapped values.

// console.log({ ...cars, volvo: cars.mazda, mazda: cars.volvo });

// 9. **Exercise**: Extract one property from an object into a new object using destructuring and the spread operator.

//     **Hint**: Use `const {prop, ...rest} = object` and return `{...rest}`.

// const { Phone, ...rest } = products;
// console.log({ ...rest });

// 10. **Exercise**: Replace a nested object's property while keeping the rest unchanged.

//     **Hint**: Use `{...object, nestedObj: {...object.nestedObj, key: value}}`.

// ---

// console.log({ ...cars, volvo: { ...cars.volvo, power: "gfchvjb" } });

// ### **Practical Scenarios (Intermediate)**

// 1. **Exercise**: Create a function `mergeObjects` that accepts multiple objects as arguments and returns one combined object.

//     **Hint**: Use `...args` and `Object.assign({}, ...args)`.

// const merge = (...args) => {
//   return Object.assign(...args);
// };

// console.log(merge(products, users, cars));

// 2. **Exercise**: Create a new object from two objects, giving precedence to the second object's properties.

// const products = {
//   Laptop: "hbknnj",
//   Phone: "jhgh",
// };
// const users = {
//   davis: "nlk",
//   Phone: "ףךלחילמךצ",
//   salom: "vug",
//   dfd: undefined,
//   salomsd: null,
// };

// const cars = {
//   volvo: { power: "vjbn", color: "hjbkjnm" },
//   mazda: "vug",
// };
//     **Hint**: Use `{...object1, ...object2}` to overwrite conflicts.

// const newOBJ = { ...products, ...users };

// console.log(newOBJ);

// 3. **Exercise**: Copy an object and add a new nested object to it without mutating the original.

//     **Hint**: Use `{...object, nested: {key: value}}`.

// const newO = { ...cars, hyundai: { color: "bjvn" } };
// console.log(newO);

// 4. **Exercise**: Extract all but one property from an object into a new object using the spread operator.

//     **Hint**: Use `const {excluded, ...rest} = object`.

// const { volvo, ...rest } = cars;
// console.log(rest);

// 5. **Exercise**: Create a copy of an object and remove all properties with `null` or `undefined` values.

//     **Hint**: Use `Object.entries` with `filter` and `reduce`.
// const users = {
//   davis: "nlk",
//   Phone: "ףךלחילמךצ",
//   salom: "vug",
//   dfd: undefined,
//   salomsd: null,
// };
// const keysAndValue = Object.entries(users);

// console.log(
//   keysAndValue
//     .filter(([key, value]) => {
//       return value !== undefined && value !== null;
//     })
//     .reduce((acc, [key, value]) => {
//       acc[key] = value;
//       return acc;
//     }, {})
// );

// 6. **Exercise**: Merge a configuration object into a default settings object to create a new object.

//     **Hint**: Use `{...defaultSettings, ...config}`.

// const merge = { ...defaultSettings, ...config };
// console.log(merge);

// 7. **Exercise**: Spread properties from multiple objects into a new object, but skip specific properties.

//     **Hint**: Use `const {key, ...rest} = {...object1, ...object2}`.

// const { davis, theme, ...rest } = { ...defaultSettings, ...config, ...users };

// console.log(rest);

// 8. **Exercise**: Update a nested property in an object using the spread operator.

//     **Hint**: Use `{...object, nestedObj: {...object.nestedObj, key: newValue}}`.

// const defaultSettings = {
//   theme: "light",
//   language: "en",
//   notifications: true,
// };

// const config = {
//   theme: "dark",
//   language: "fr",
// };

// const users = {
//   davis: "nlk",
//   Phone: { color: "red", size: 50 },
//   salom: "vug",
//   dfd: undefined,
//   salomsd: null,
// };

// console.log({ ...users, Phone: { ...users.Phone, color: "blue" } });

// 9. **Exercise**: Convert an array of key-value pairs into an object using the spread operator.

//     **Hint**: Use `Object.fromEntries(array)`.

const keyValuePairs = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
  ["job", "developer"],
];

const products = {
  Laptop: "hbknnj",
  Phone: "jhgh",
};

const users = {
  davis: "nlk",
  Phone: { color: "red", size: 50 },
  salom: "vug",
  dfd: undefined,
  salomsd: null,
};

const obj = Object.fromEntries(keyValuePairs);
console.log(obj);

// 10. **Exercise**: Combine user details and preferences objects while overriding specific values.

//     **Hint**: Use `{...user, ...preferences, specificKey: newValue}`.

console.log({ ...products, ...users, dfd: "ghgjk" });

// ---

// These exercises and hints should provide students with a clear, hands-on understanding of the spread operator for arrays and objects. Would you like to go deeper into any of these?
