// Место для первой задачи
function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	for (let i = 0; i < arr.length; i++) {
		result[i] = arr[i];
		console.log(result);
	}
	
	// Не трогаем
	return result;
}

firstTask()

// Место для второй задачи
function secondTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];

	// Пишем решение вот тут
	data.forEach(function(item, i) {
		// console.log(typeof item);
		if (typeof item === 'number') {
			data[i] = item * 2;
		} else if (typeof item === 'string') {
			data[i] = `${item} - done`;
		}
	});
	console.log(data);
	// Не трогаем
	return data;
}

secondTask()

// Место для третьей задачи
function thirdTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];

	// Пишем решение вот тут
	for (let i = 0; i < data.length; i++) {
		// console.log(i);
		// console.log(data.length);
		const a = i + 1;
		// console.log(a);
		result[i] = data[data.length - a]		
	}
	console.log(result);
	// Не трогаем
	return result;
}

thirdTask() 