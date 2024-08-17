import { GameDataType } from "./Calculator";

function DisplayPoints({
    Points,
    currentUser,
}: GameDataType) {
    return (
        <div className="border border-black py-5 grid place-items-center">
            <p className="text-xl mb-2">ターン: {currentUser}</p>

            <div className="py-4 flex gap-4">
                {Points.binaryResult.map((bitValue) => (
                    <span className="text-6xl">{bitValue}</span>
                ))}
            </div>

            <p className="text-xl">
                <span className="text-3xl mr-2">{Points.decimalResult}</span>
                ポイント
            </p>
        </div>
    )
};

export default DisplayPoints;
