import { useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Accordion from '../components/Accordion';
import TextArea from '../components/TextArea';
import FileUpload from '../components/FileUpload';

type SectionName = 'description' | 'keyConcepts' | 'examples' | 'commonMistakes' | 'approvedReferences';

type KnowledgeStepProps = {
  onBack: () => void;
  onContinue: () => void;
};

const KnowledgeStep = ({ onBack, onContinue }: KnowledgeStepProps) => {
  const [openSection, setOpenSection] = useState<SectionName | null>('description');
  const [files, setFiles] = useState<File[]>([]);

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

        <div>
          <p className="font-medium">Supporting Documents & Materials</p>
          <p className="text-gray-g3 py-1 text-[12px]">Upload text-only documents (no images or tables) in PDF or DOC format.</p>
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

          <FileUpload files={files} onChange={setFiles} />
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={onBack} variant="secondary">
          ← Go Back
        </Button>
        <Button onClick={onContinue}>Continue →</Button>
      </div>
    </div>
  );
};

export default KnowledgeStep;
