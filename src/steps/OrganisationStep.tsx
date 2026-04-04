import TextInput from '../components/TextInput';
import Button from '../components/Button';
import AvatarTypeSelector from '../components/AvatarTypeSelector';
import OrganisationIconUpload from '../components/OrganisationIconUpload';
import { useState } from 'react';

type OrganisationStepProps = {
  onContinue: () => void;
};

const OrganisationStep = ({ onContinue }: OrganisationStepProps) => {
  const [orgIcon, setOrgIcon] = useState<File | null>(null);
  const [orgIconPreview, setOrgIconPreview] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-xl font-medium">Which Best Describes Your Use Case?</h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Your Organisation Icon</p>

          <OrganisationIconUpload
            preview={orgIconPreview}
            onChange={(file, preview) => {
              setOrgIcon(file);
              setOrgIconPreview(preview);
            }}
            onDelete={() => {
              setOrgIcon(null);
              setOrgIconPreview(null);
            }}
          />
        </div>

        <TextInput label="Organisation Name" placeholder="Your organisation" />

        <AvatarTypeSelector value="education" onChange={() => console.log('')} />
      </div>

      <div className="flex gap-2">
        <Button variant="secondary">← Go Back</Button>
        <Button onClick={onContinue}>Continue →</Button>
      </div>
    </div>
  );
};

export default OrganisationStep;
