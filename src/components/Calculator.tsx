// import { useState } from "react";
import DisplayPoints from "./DisplayPoints";

export type GameDataType = {
    Points: {
        binaryResult: Array<number>,
        decimalResult: number,
    },
    currentUser: string,
}

function Calculator() {
    const GameData: GameDataType = {
        Points: {
            binaryResult: [0, 1, 0, 0, 1],
            decimalResult: 3,
        },
        currentUser: "John Doe",
    };
		// const [gameData, setGameData] = useState();

		// ユーザーの入力値を取得する

		// CPUの数だけ値を取得する

		// ユーザーの入力とCPUの入力から値を10進数を計算する

    return (
        <div>
            <DisplayPoints Points={GameData.Points} currentUser={GameData.currentUser} />
        </div>
    )
}

export default Calculator;
