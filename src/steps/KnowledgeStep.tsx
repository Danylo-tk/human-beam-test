import { useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { FormDataType } from '../types';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Accordion from '../components/Accordion';
import TextInput from '../components/TextInput';
import FileUpload from '../components/FileUpload';
import Tooltip from '../components/Tooltip';
import { InfoIcon } from '../assets/icons';

type SectionName = 'description' | 'keyConcepts' | 'examples' | 'commonMistakes' | 'approvedReferences';

type KnowledgeStepProps = {
  form: UseFormReturn<FormDataType>;
  onBack: () => void;
  onContinue: () => void;
};

const KnowledgeStep = ({ form, onBack, onContinue }: KnowledgeStepProps) => {
  const [openSection, setOpenSection] = useState<SectionName | null>(null);
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;
  const supportingFiles = watch('supportingFiles');

  const toggle = (section: SectionName) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleContinue = () => {
    form.trigger(['moduleName', 'moduleDescription', 'keyConcepts', 'examples', 'commonMistakes', 'approvedReferences']).then((valid) => {
      if (valid) onContinue();
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-xl font-medium">Your Avatar Knowledge Base</h1>

      <div className="flex flex-col gap-4">
        <TextInput
          label={
            <span className="flex items-center gap-1">
              Module Name
              <Tooltip text="Your AI is trained per module to be able to guide your students one chapter at a time">
                <InfoIcon />
              </Tooltip>
            </span>
          }
          placeholder="e.g. Mental Health Nursing"
          error={errors.moduleName?.message}
          {...register('moduleName', { required: 'Module name is required' })}
        />

        <div className="flex flex-col gap-2">
          <Accordion
            label="Module Description"
            isOpen={openSection === 'description'}
            onToggle={() => toggle('description')}
            error={!!errors.moduleDescription}
          >
            <TextArea
              placeholder="What the course teaches + outcomes"
              error={errors.moduleDescription?.message}
              {...register('moduleDescription', { required: 'Module description is required' })}
            />
          </Accordion>

          <Accordion
            label="Key Concepts & Definitions"
            isOpen={openSection === 'keyConcepts'}
            onToggle={() => toggle('keyConcepts')}
            error={!!errors.keyConcepts}
          >
            <TextArea
              placeholder="e.g. Key terms + their definitions"
              error={errors.keyConcepts?.message}
              {...register('keyConcepts', { required: 'Key concepts are required' })}
            />
          </Accordion>

          <Accordion label="Examples / Case Examples" isOpen={openSection === 'examples'} onToggle={() => toggle('examples')} error={!!errors.examples}>
            <TextArea
              placeholder="Real scenarios that illustrate key concepts"
              error={errors.examples?.message}
              {...register('examples', { required: 'Examples are required' })}
            />
          </Accordion>

          <Accordion
            label="Common Student Mistakes"
            isOpen={openSection === 'commonMistakes'}
            onToggle={() => toggle('commonMistakes')}
            error={!!errors.commonMistakes}
          >
            <TextArea
              placeholder="Typical errors + how to avoid them"
              error={errors.commonMistakes?.message}
              {...register('commonMistakes', { required: 'Common Mistakes concepts are required' })}
            />
          </Accordion>

          <Accordion
            label="Approved References"
            isOpen={openSection === 'approvedReferences'}
            onToggle={() => toggle('approvedReferences')}
            error={!!errors.approvedReferences}
          >
            <TextArea
              placeholder="Books, guidelines, or papers to cite"
              error={errors.approvedReferences?.message}
              {...register('approvedReferences', { required: 'approvedReferences concepts are required' })}
            />
          </Accordion>
        </div>

        <div>
          <p className="font-medium">Supporting Documents & Materials</p>
          <p className="text-gray-g3 py-1 text-[12px]">Upload text-only documents (no images or tables) in PDF, TXT, or MD format.</p>
          <ul className="text-gray-g3 list-outside list-disc pb-2 pl-5 text-[12px]">
            {[
              'Syllabus (so your avatar understand your entire course)',
              'Module teaching materials',
              'Lecture notes',
              'Reading pack or citations list',
              'Practice problems / worksheets',
              'Assessment assets',
              'Question bank',
              'Sample answers / exemplars (optional)',
              'Other (optional)',
            ].map((hint) => (
              <li key={hint}>
                <span>{hint}</span>
              </li>
            ))}
          </ul>

          <FileUpload files={supportingFiles} onChange={(files) => setValue('supportingFiles', files)} />
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={onBack} variant="secondary">
          ← Go Back
        </Button>
        <Button onClick={handleContinue}>Continue →</Button>
      </div>
    </div>
  );
};

export default KnowledgeStep;
