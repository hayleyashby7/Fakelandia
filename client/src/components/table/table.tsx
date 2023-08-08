import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { MisdemeanourWithEmoji } from '../../types/misdemeanours.types';

interface TableProps {
	data: MisdemeanourWithEmoji[];
}

const columnHelper = createColumnHelper<MisdemeanourWithEmoji>();

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
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
