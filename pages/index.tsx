import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../src/redux/slices/counter";
import { RootState } from "../src/redux/reducers";

const Home: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className="">
            <button
                className="p-5 text-white bg-black"
                onClick={() => dispatch(increase())}
            >
                add
            </button>
            {count}
        </div>
    );
};

export default Home;
