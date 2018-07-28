//FORMA RECURSIVA

const stairs = (n) => {
	if (n === 1) return 1
	if (n === 2) return 2
		return stairs(n-1) + stairs(n-2)
}

//PROGRAMACIÓN DINAMICA

const stairs = (n,memory) => {
	if (n === 1) return memory[1]
	if (n === 2) return memory[2]
	if (memory[n] !== undefined ) return memory[n]
	memory[n] = stairs(n-1, memory) + stairs(n-2,memory)
	return memory[n]
}

const getStairs = (n) => {
	let memory = new Array(n)
	memory[1] = 1
	memory[2] = 2
	return stairs(n,memory)
}

//BOTTOM-UP DP

const getStairs = (n) => {
	let memory = new Array(n)
	memory[1] = 1
	memory[2] = 2
	for (var i = 3; i <= n; i++) {
		memory[i] = memory[i - 1] + memory[i - 2]
	}
	return memory[n]
}

console.log(getStairs(70))