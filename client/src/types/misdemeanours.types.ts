export const MISDEMEANOURS = ['rudeness', 'vegetables', 'lift', 'united'] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = 'just-talk';
export type JustTalk = typeof JUST_TALK;

export enum MISDEMEANOUR_EMOJIS {
	rudeness = '🤪',
	vegetables = '🗣',
	lift = '🥗',
	united = '😈',
}

export type MisdemeanourEmoji = (typeof MISDEMEANOUR_EMOJIS)[MisdemeanourKind];

export type MisdemeanourAndEmoji = MisdemeanourKind & MisdemeanourEmoji;

export type Misdemeanour = {
	citizenId: number;
	misdemeanour: MisdemeanourKind | MisdemeanourAndEmoji;
	date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};