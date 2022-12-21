import { useEffect, useState } from "react";

function Demo() {
	const [count, setCount] = useState(1);
	useEffect(() => {
		//
	});
	const handelAdd = () => {
		setCount(c => c + 1);
	};
	return (
		<div>
			<div>count is {count}</div>
			<button onClick={handelAdd}>add 1</button>
		</div>
	);
}
export default Demo;
