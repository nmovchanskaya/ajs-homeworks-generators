function canIterate(obj) {
  if (obj === null || obj === undefined) {
    console.log('No!');
    return false;
  }
  if (obj[Symbol.iterator]) {
    console.log('Yes!');
    return true;
  }

  console.log('No!');
  return false;
}

canIterate([1, 2]); // true
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(undefined); // false
canIterate(10); // false
canIterate('Netology'); // true
