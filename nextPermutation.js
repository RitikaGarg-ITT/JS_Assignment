const swapArrayElements = (index1, index2, arr) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

const nextPermutation = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;

  let i = len - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  if (i === -1) {
    arr.reverse();
    return arr;
  }

  let j = len - 1;
  while (arr[j] <= arr[i]) {
    j--;
  }

  swapArrayElements(i, j, arr);

  const firstHalf = arr.slice(0, i + 1);
  const secondHalf = arr.slice(i + 1).reverse();
  const nextPermutation = firstHalf.concat(secondHalf);
  return nextPermutation;
};

const arrayToBeArranged = [1, 2, 3, 6, 5, 4];
console.log(nextPermutation(arrayToBeArranged));
