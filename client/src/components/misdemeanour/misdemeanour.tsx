import useMisdemeanour from '../../hooks/useMisdemeanours';
import { Misdemeanour_List } from './misdemanour_list';

interface MisdemeanourProps {
	amount?: number;
}

const Misdemeanour: React.FC<MisdemeanourProps> = ({ amount = 50 }) => {
	const { data: data } = useMisdemeanour(amount);

	return <Misdemeanour_List data={data} />;
};

export default Misdemeanour;
