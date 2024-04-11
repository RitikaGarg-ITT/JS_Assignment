const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const nearestPrime = (num) => {
  let smaller = num - 1;
  let larger = num + 1;
  while (true) {
    if (isPrime(smaller)) {
      return smaller;
    }
    if (isPrime(larger)) {
      return larger;
    }
    smaller--;
    larger++;
  }
};

const replaceWithNearestPrime = (arr) => {
  return arr.map((num) => {
    if (!isPrime(num)) {
      return nearestPrime(num);
    }
    return num;
  });
};

const arr = [7, 8, 9];
console.log("Original array:", arr);
const replacedArr = replaceWithNearestPrime(arr);
console.log("Final array after replacement:", replacedArr);
