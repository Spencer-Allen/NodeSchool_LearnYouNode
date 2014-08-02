function getSum(x){
  arrayLen = x.length;
  inputSum = 0
	for (i = 2; i < arrayLen; i++){
		inputSum += +x[i]
	}
	return inputSum
}

console.log(getSum(process.argv))
