import type { Config } from "tailwindcss";

const config: Config = {
	theme: {
		extend: {
			screens: {
				// Desktop-first: md applies below 768px (max-width)
				md: { max: "767.98px" },
			},
		},
	},
};

export default config;

