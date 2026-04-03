import { useState } from 'react';
import Accordion from '../components/Accordion';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

type SectionName = 'description' | 'keyConcepts' | 'examples' | 'commonMistakes' | 'approvedReferences';

type OrganisationStepProps = {
  onContinue: () => void;
};

const OrganisationStep = ({ onContinue }: OrganisationStepProps) => {
  const [openSection, setOpenSection] = useState<SectionName | null>('description');

  const toggle = (section: SectionName) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-xl font-medium">Your Avatar Knowledge Base</h1>

      <div className="flex flex-col gap-4">
        <TextInput label="Module Name" placeholder="e.g. Mental Health Nursing" />

        <div className="flex flex-col gap-2">
          <Accordion label="Module Description" isOpen={openSection === 'description'} onToggle={() => toggle('description')}>
            <TextArea placeholder="What the course teaches + outcomes" />
          </Accordion>

          <Accordion label="Key Concepts & Definitions" isOpen={openSection === 'keyConcepts'} onToggle={() => toggle('keyConcepts')}>
            <TextArea placeholder="e.g. Key terms + their definitions" />
          </Accordion>

          <Accordion label="Examples / Case Examples" isOpen={openSection === 'examples'} onToggle={() => toggle('examples')}>
            <TextArea placeholder="Real scenarios that illustrate key concepts" />
          </Accordion>

          <Accordion label="Common Student Mistakes" isOpen={openSection === 'commonMistakes'} onToggle={() => toggle('commonMistakes')}>
            <TextArea placeholder="Typical errors + how to avoid them" />
          </Accordion>

          <Accordion label="Approved References" isOpen={openSection === 'approvedReferences'} onToggle={() => toggle('approvedReferences')}>
            <TextArea placeholder="Books, guidelines, or papers to cite" />
          </Accordion>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary">← Go Back</Button>
        <Button onClick={onContinue}>Continue →</Button>
      </div>
    </div>
  );
};

export default OrganisationStep;
