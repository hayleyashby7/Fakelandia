import { Misdemeanour } from '../../types/misdemeanours.types';

interface Misdemeanour_ItemProps {
	misdemeanour: Misdemeanour;
}

export const Misdemeanour_Item: React.FC<Misdemeanour_ItemProps> = ({ misdemeanour }) => {
	return (
		<li key={misdemeanour.citizenId}>
			<p>{misdemeanour.citizenId}</p>
			<p>{misdemeanour.date}</p>
			<p>{misdemeanour.misdemeanour}</p>
		</li>
	);
};
