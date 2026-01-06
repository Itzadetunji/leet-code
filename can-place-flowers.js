/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
	let reaminingPlants = n;
	const newFlowerBed = flowerbed;

	for (let i = 0; i < newFlowerBed.length; i++) {
		if (
			newFlowerBed[i] === 0 &&
			(i !== 0 ? newFlowerBed[i - 1] === 0 : true) &&
			reaminingPlants &&
			(i !== newFlowerBed.length - 1 ? newFlowerBed[i + 1] === 0 : true)
		) {
			--reaminingPlants;

			newFlowerBed[i] = 1;
		}
	}

	return reaminingPlants === 0;
};

canPlaceFlowers([1, 0, 0, 0, 1], 1);
