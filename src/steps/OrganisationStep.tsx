import { useState } from 'react';
import { Controller } from 'react-hook-form';
import type { UseFormReturn } from 'react-hook-form';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import AvatarTypeSelector from '../components/AvatarTypeSelector';
import OrganisationIconUpload from '../components/OrganisationIconUpload';
import type { FormDataType } from '../types';

type OrganisationStepProps = {
  form: UseFormReturn<FormDataType>;
  onContinue: () => void;
};

const OrganisationStep = ({ form, onContinue }: OrganisationStepProps) => {
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const {
    register,
    setValue,
    formState: { errors },
  } = form;

  const handleContinue = () => {
    // validate only current screen fields before proceeding
    form.trigger(['organisationName', 'avatarType']).then((valid) => {
      if (valid) onContinue();
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-xl font-medium">Which Best Describes Your Use Case?</h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Your Organisation Icon</p>

          <OrganisationIconUpload
            preview={iconPreview}
            onChange={(file, preview) => {
              setValue('organisationIcon', file);
              setIconPreview(preview);
            }}
            onDelete={() => {
              setValue('organisationIcon', null);
              setIconPreview(null);
            }}
          />
        </div>

        <TextInput
          label="Organisation Name"
          placeholder="Your organisation"
          error={errors.organisationName?.message}
          {...register('organisationName', { required: 'Organisation name is required' })}
        />

        <Controller
          control={form.control}
          name="avatarType"
          rules={{ required: 'Please select an avatar type' }}
          render={({ field, fieldState }) => <AvatarTypeSelector value={field.value} onChange={field.onChange} error={fieldState.error?.message} />}
        />
      </div>

      <div className="flex gap-2">
        <Button variant="secondary">← Go Back</Button>
        <Button onClick={handleContinue}>Continue →</Button>
      </div>
    </div>
  );
};

export default OrganisationStep;
