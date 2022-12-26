import { useState } from "react";

const MyChildren = (props: any) => {
	const [count, setCount] = useState("哈哈");
	const { dispatch, State } = props;
	const clickChildren = (action: any) => {
		dispatch(action);
	};
	return (
		<div onClick={clickChildren}>
			children:{State}
			<button onClick={() => clickChildren({ name: "add" })}>增加</button>
			<button onClick={() => clickChildren({ name: "sub" })}>减少</button>
			<button
				onClick={() => {
					setCount(c => (c == "嘿嘿" ? "哈哈" : "嘿嘿"));
				}}
			>
				{count}
			</button>
		</div>
	);
};
export default MyChildren;
