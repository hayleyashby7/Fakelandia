import { useReactTable, createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, PaginationState } from '@tanstack/react-table';
import { MisdemeanourTableRow } from '../misdemeanour/misdemanour_list';

interface TableProps {
	data: MisdemeanourTableRow[];
}

const columnHelper = createColumnHelper<MisdemeanourTableRow>();

const columns = [
	columnHelper.accessor('citizenId', {
		header: 'ID',
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
		getPaginationRowModel: getPaginationRowModel<PaginationState>(),
		enableFilters: true,
		enableColumnFilters: true,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='flex flex-col'>
			<table className='shadow-none md:shadow-lg bg-white border-collapse my-4 mx-2'>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th className='bg-red text-white' key={header.id}>
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
			<div className='flex flex-col justify-evenly md:flex-row'>
				<div className='flex justify-center gap-2'>
					<button className='border rounded p-1' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
						{'<<'}
					</button>
					<button className='border rounded p-1' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
						{'<'}
					</button>
					<button className='border rounded p-1' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
						{'>'}
					</button>
					<button className='border rounded p-1' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
						{'>>'}
					</button>
				</div>
				<span className='flex flex-col items-center gap-1'>
					<div>Page</div>
					<strong>
						{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
					</strong>
				</span>
				<select
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}
				>
					{[5, 10, 15, 20].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Table;
