// Задача 67.
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

function inArray(text, array) {
	for ( let i = 0; i < array.length; i++) {
	  if (array[i] === text) 
	  return true;
	}
	return false;
  }
  alert (inArray('!', ['Привет', '!', 'май']));


  
 

// Задача 72.
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

mas = [-2,-4,5,7,9,11];
let vision = mas.reduce(function (sum, elem, _index) {
	if (sum > 10) {
		alert(_index);
		return;
	} 
	else {
	_index++;

		 	return sum + elem;
			}
}); 


