import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

const HooksCounter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const incrementHandeler = () => {
        dispatch(increment());
    }
    const decrementHandeler = () => {
        dispatch(decrement());
    }
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={incrementHandeler}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrementHandeler}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default HooksCounter;