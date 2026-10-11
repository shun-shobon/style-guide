import type { ReactNode } from "react";
import { useState } from "react";

export function Counter(): ReactNode {
	const [count, setCount] = useState(0);

	return (
		<button
			type="button"
			onClick={() => {
				setCount((previous) => previous + 1);
			}}
		>
			{count}
		</button>
	);
}
