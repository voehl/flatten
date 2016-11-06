module.exports = function (array) {
	return (Array.isArray(array) && array.length === 1) ? array[0] : array;
};