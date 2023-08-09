export const randomPunishment = (): string => {
	const random = Math.floor(Math.random() * 1000);
	return `https://picsum.photos/100?random=${random}`;
};
