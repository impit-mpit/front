import clsx from "clsx";
const Divider = ({ className = "" }) => {
	return (
		<div
			className={clsx(
				"self-stretch w-full border-b border-black opacity-[24%]",
				className
			)}
		/>
	);
};

export default Divider;
