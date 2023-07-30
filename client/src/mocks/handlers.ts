import { rest } from 'msw';

export const handlers = [
	rest.get('http://localhost:8080/api/misdemeanours/1', (_req, res, ctx) => {
		return res(
			ctx.json({
				misdemeanours: [
					{
						citizenId: 15568,
						misdemeanour: 'vegetables',
						date: '29/07/2023',
					},
				],
			})
		);
	}),
	rest.get('http://localhost:8080/api/misdemeanours/50', (_req, res, ctx) => {
		return res(
			ctx.json({
				misdemeanours: [
					{
						citizenId: 11276,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 11397,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 9685,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 3880,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 19561,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 3470,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 18225,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 14695,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 3805,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 25682,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 17127,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 433,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 4344,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 4009,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 970,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 7227,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 526,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 1156,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 22193,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 698,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 5760,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 4038,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 23680,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 5863,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 19187,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 3676,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 5142,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 12543,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 10068,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 4465,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 3968,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 11017,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 13936,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 3150,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 138,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 25041,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 9605,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 3770,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 9302,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 1316,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 6160,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 129,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 1569,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 6334,
						misdemeanour: 'lift',
						date: '30/07/2023',
					},
					{
						citizenId: 1802,
						misdemeanour: 'vegetables',
						date: '30/07/2023',
					},
					{
						citizenId: 4098,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 10954,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 2135,
						misdemeanour: 'rudeness',
						date: '30/07/2023',
					},
					{
						citizenId: 4774,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
					{
						citizenId: 15721,
						misdemeanour: 'united',
						date: '30/07/2023',
					},
				],
			})
		);
	}),
];
