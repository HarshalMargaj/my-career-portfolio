const GlowEffect = ({
	top,
	right,
	bottom,
	left,
	width = "210px",
	height = "210px",
	opacity = 20,
}: {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	width?: string;
	height?: string;
	opacity?: number;
}) => {
	return (
		<div
			style={{
				background:
					"linear-gradient(180deg, rgba(84, 84, 84, 0) 0%, rgb(36, 95, 55) 100%)",
				filter: "blur(84px)",
				borderRadius: "24px",
				opacity,
				position: "absolute",
				top,
				right,
				bottom,
				left,
				width,
				height,
			}}
		/>
	);
};

export default GlowEffect;
