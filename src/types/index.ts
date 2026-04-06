export type StepType = 'organisation' | 'knowledge';

export type StepOptionType = { name: StepType; number: number; label: string };

export type AvatarType = 'education' | 'course' | 'influencer';

export type AvatarOptionType = { value: AvatarType; letter: string; label: string; sublabel: string };

export type FormDataType = {
  // Screen 'organisation'
  organisationName: string;
  avatarType: AvatarType | undefined;

  // Screen 'knowledge'
  moduleName: string;
  moduleDescription: string;
  keyConcepts: string;
  examples: string;
  commonMistakes: string;
  approvedReferences: string;

  // Files data stored in RHF but not sent to API
  organisationIcon: File | null;
  supportingFiles: File[];
};
