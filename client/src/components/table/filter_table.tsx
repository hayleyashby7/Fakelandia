import { MisdemeanourKind, MISDEMEANOURS } from '../../types/misdemeanours.types';
import { MisdemeanourTableRow } from '../misdemeanour/misdemanour_list';
import Table from './table';
import { useState } from 'react';

interface Filter_TableProps {
	data: MisdemeanourTableRow[];
}

export const Filter_Table: React.FC<Filter_TableProps> = ({ data }) => {
	const misdemeanours = ['', ...Object.entries(MISDEMEANOURS).map(([, item]) => item)];
	const [filter, setFilter] = useState(misdemeanours[0]);

	const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.target.value === '' ? setFilter('') : setFilter(event.target.value as MisdemeanourKind);
		return;
	};

	const filteredData = filter === '' ? data : data.filter((misdemeanour) => misdemeanour.misdemeanour === filter);

	return (
		<div className='flex flex-col items-center '>
			<label htmlFor='filter'>Filter by misdemeanour: </label>
			<select name='filter' value={filter} onChange={handleFilter}>
				{misdemeanours.map((misdemeanour) => (
					<option key={misdemeanour}>{misdemeanour}</option>
				))}
			</select>
			<Table data={filteredData} />
		</div>
	);
};

export default Filter_Table;
