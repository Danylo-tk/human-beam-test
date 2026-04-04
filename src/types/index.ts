export type StepType = 'organisation' | 'knowledge';

export type StepOptionType = { name: StepType; number: number; label: string };

export type AvatarType = 'education' | 'course' | 'influencer';

export type AvatarOptionType = { value: AvatarType; letter: string; label: string; sublabel: string };
