function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if(numbers.startsWith("//")) {
    const parts = numbers.match(/^\/\/(.+)\n(.+)/)
    delimiter = new RegExp(parts[1]);
    numbers = parts[2];
  } 

  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

export default add;
