import { useState } from 'react';
import './App.css';
import logoImg from './assets/HB-logo.svg';
import Button from './components/Button';
import Stepper from './components/Stepper';
import OrganisationStep from './steps/OrganisationStep';
import KnowledgeStep from './steps/KnowledgeStep';
import type { StepOptionType, StepType } from './types';
import { Toaster } from 'react-hot-toast';

const steps: StepOptionType[] = [
  { name: 'organisation', number: 1, label: 'Organisation' },
  { name: 'knowledge', number: 2, label: 'Knowledge' },
];

function App() {
  const [currentStep, setCurrentStep] = useState<StepType>('organisation');

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
            {currentStep === 'organisation' && <OrganisationStep onContinue={() => setCurrentStep('knowledge')} />}
            {currentStep === 'knowledge' && <KnowledgeStep onBack={() => setCurrentStep('organisation')} onContinue={() => console.log('submit')} />}
          </div>

          <div className="col-span-4 bg-red-100">Video Player</div>
        </div>
      </main>
    </>
  );
}

export default App;
