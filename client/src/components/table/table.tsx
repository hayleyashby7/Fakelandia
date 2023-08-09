import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { MisdemeanourTableRow } from '../misdemeanour/misdemanour_list';

interface TableProps {
	data: MisdemeanourTableRow[];
}

const columnHelper = createColumnHelper<MisdemeanourTableRow>();

const columns = [
	columnHelper.accessor('citizenId', {
		header: 'Citizen ID',
		cell: (info) => info.getValue(),
	}),

	columnHelper.accessor('date', {
		header: 'Date',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('misdemeanourWithEmoji', {
		header: 'Misdemeanour',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('punishment', {
		header: 'Punishment',
		cell: (info) => {
			return <img src={info.row.original.punishment} alt='punishment' />;
		},
	}),
];

export const Table: React.FC<TableProps> = ({ data }) => {
	const table = useReactTable({
		data,
		columns,
		enableFilters: true,
		enableColumnFilters: true,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			<table className='shadow-none md:shadow-lg bg-white border-collapse w-full my-4 mx-0'>
				<thead className='hidden sm:table-header-group'>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th className='bg-red text-white text-left' key={header.id}>
									{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td className='text-left' key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
