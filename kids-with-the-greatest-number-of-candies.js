/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
	const newCandies = [];
	const highestvalue = Math.max(...candies);

	candies.forEach((candy) => {
		newCandies.push(candy + extraCandies >= highestvalue);
	});

	return newCandies;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
