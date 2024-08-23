const numberFormat = (number) => {
  const numToArray = String(Math.abs(number)).split("").reverse();
  const fortmattedNum = [];

  for (let i = 0; i < numToArray.length; i += 3) {
    fortmattedNum.push(numToArray.slice(i, i + 3));
  }
  const fortmattedNumber = fortmattedNum
    .map((element) => element.reverse().join(""))
    .reverse()
    .join(",");
  return number < 0 ? `-${fortmattedNumber}` : `${fortmattedNumber}`;
};


// number.toLocaleString()