import { useState } from 'react';
import Accordion from '../components/Accordion';
import TextInput from '../components/TextInput';

type SectionName = 'description' | 'keyConcepts' | 'examples' | 'commonMistakes' | 'approvedReferences';

const OrganisationStep = () => {
  const [openSection, setOpenSection] = useState<SectionName | null>('description');

  const toggle = (section: SectionName) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium">Your Avatar Knowledge Base</h1>

      <TextInput label="Module Name" placeholder="e.g. Mental Health Nursing" />

      <div className="flex flex-col gap-2">
        <Accordion label="Module Description" isOpen={openSection === 'description'} onToggle={() => toggle('description')}>
          textarea
        </Accordion>

        <Accordion label="Key Concepts & Definitions" isOpen={openSection === 'keyConcepts'} onToggle={() => toggle('keyConcepts')}>
          textarea
        </Accordion>

        <Accordion label="Examples / Case Examples" isOpen={openSection === 'examples'} onToggle={() => toggle('examples')}>
          textarea
        </Accordion>

        <Accordion label="Common Student Mistakes" isOpen={openSection === 'commonMistakes'} onToggle={() => toggle('commonMistakes')}>
          textarea
        </Accordion>

        <Accordion label="Approved References" isOpen={openSection === 'approvedReferences'} onToggle={() => toggle('approvedReferences')}>
          textarea
        </Accordion>
      </div>
    </div>
  );
};

export default OrganisationStep;
