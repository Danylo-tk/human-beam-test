import { useState } from 'react';
import './App.css';
import logoImg from './assets/HB-logo.svg';
import Button from './components/Button';
import Stepper from './components/Stepper';
import OrganisationStep from './steps/OrganisationStep';
import KnowledgeStep from './steps/KnowledgeStep';
import type { AvatarType, StepOptionType, StepType } from './types';
import { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const steps: StepOptionType[] = [
  { name: 'organisation', number: 1, label: 'Organisation' },
  { name: 'knowledge', number: 2, label: 'Knowledge' },
];

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

function App() {
  const [currentStep, setCurrentStep] = useState<StepType>('organisation');

  const form = useForm<FormDataType>({
    mode: 'onChange',
    shouldUnregister: false,
    defaultValues: {
      organisationName: '',
      avatarType: undefined,

      moduleName: '',
      moduleDescription: '',
      keyConcepts: '',
      examples: '',
      commonMistakes: '',
      approvedReferences: '',

      organisationIcon: null,
      supportingFiles: [],
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log('submit data: ', data);
  });

  return (
    <>
      <Toaster position="top-right" containerStyle={{ top: 80 }} />

      <header className="border-gray sticky top-0 z-10 flex justify-between border-b bg-white p-3">
        <img alt="Human Beam logo" src={logoImg} />

        <Stepper steps={steps} currentStep={currentStep} />

        <Button>Sign up</Button>
      </header>

      <main className="flex justify-center">
        <div className="grid w-full max-w-3xl grid-cols-9 py-10">
          <div className="col-span-5">
            {currentStep === 'organisation' && <OrganisationStep form={form} onContinue={() => setCurrentStep('knowledge')} />}
            {currentStep === 'knowledge' && <KnowledgeStep form={form} onBack={() => setCurrentStep('organisation')} onContinue={handleSubmit} />}
          </div>

          <div className="col-span-4 bg-red-100">Video Player</div>
        </div>
      </main>
    </>
  );
}

export default App;
