import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

function Son(props, ref) {
	console.log(props);
	const inputRef = useRef();
	const [inputValue, setInputValue] = useState("");
	useImperativeHandle(
		ref,
		() => {
			const handleRefs = {
				/* 声明方法用于聚焦input框 */
				onFocus() {
					inputRef.current.focus();
				},
				/* 声明方法用于改变input的值 */
				onChangeValue(value) {
					setInputValue(value);
				}
			};
			return handleRefs;
		},
		[]
	);
	return (
		<div>
			<input placeholder="请输入内容" ref={inputRef} value={inputValue} />
		</div>
	);
}

const ForwarSon = forwardRef(Son);

function Index() {
	const inputRef = useRef();
	function handerClick() {
		console.log("inputRef.current", inputRef.current);
		const { onFocus, onChangeValue } = inputRef.current;
		onFocus();
		onChangeValue("let us learn React!");
	}
	return (
		<div style={{ marginTop: "50px" }}>
			<ForwarSon ref={inputRef} />
			<button onClick={handerClick}>操控子组件</button>
		</div>
	);
}
export default Index;
