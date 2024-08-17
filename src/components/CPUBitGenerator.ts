export const randomBitGenerator = (cpuLevel?: string) => {
	if (cpuLevel === "hard") {
		// ランダムで相手の入力を参照する
	}

	const random_0to1: number = Math.random();
	const randomBit: number = (random_0to1 > 0.5) ? 1 : 0;
	
	return randomBit;
}
