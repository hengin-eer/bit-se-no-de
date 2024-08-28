import { GameDataType } from './Calculator';

function DisplayPoints({ Points, currentUser }: GameDataType) {
	return (
		<div className="grid py-5 border border-black place-items-center">
			<p className="mb-2 text-xl">ターン: {currentUser}</p>

			<div className="flex gap-4 py-4">
				{Points.binaryResult.map((bitValue) => (
					<span className="text-6xl">{bitValue}</span>
				))}
			</div>
			<p className="text-xl">
				<span className="mr-2 text-3xl">{Points.decimalResult}</span>ポイント
			</p>
		</div>
	);
}
export default DisplayPoints;
