import { CheckIcon } from '../../assets/icons';
import type { AvatarOptionType, AvatarType } from '../../types';

const avatarOptions: AvatarOptionType[] = [
  {
    value: 'education',
    letter: 'A',
    label: 'Education simulation avatar',
    sublabel: 'Replace actors',
  },
  {
    value: 'course',
    letter: 'B',
    label: 'Course avatar',
    sublabel: 'Public speakers, coaches',
  },
  {
    value: 'influencer',
    letter: 'C',
    label: 'Influencer avatar',
    sublabel: 'Community, influencers',
  },
];

type AvatarTypeSelectorProps = {
  value: AvatarType | undefined;
  onChange: (val: AvatarType) => void;
  error?: string;
};

const AvatarTypeSelector = ({ value, onChange, error }: AvatarTypeSelectorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium">Select Avatar Type</p>
      {avatarOptions.map((avatar) => (
        <AvatarTypeOption avatar={avatar} selected={value === avatar.value} onClick={() => onChange(avatar.value)} />
      ))}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

const AvatarTypeOption = ({ avatar, selected, onClick }: { avatar: AvatarOptionType; selected: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`bg-blue-b1 flex h-16 w-60 cursor-pointer gap-2 rounded-sm p-2 ${selected ? 'bg-blue-b3 border-primary border' : 'bg-blue-b1 border-blue-b1 border'}`}
  >
    <div className={`text-blue-b2 flex h-5 w-5 items-center justify-center rounded-xs text-sm font-bold ${selected ? 'bg-primary' : 'bg-white'}`}>
      {selected ? <CheckIcon /> : avatar.letter}
    </div>

    <div className="text-left">
      <p>{avatar.label}</p>
      <p className="opacity-50">{avatar.sublabel}</p>
    </div>
  </button>
);

export default AvatarTypeSelector;
