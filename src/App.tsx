import { useState } from 'react';
import './App.css';
import logoImg from './assets/HB-logo.svg';
import Button from './components/Button';
import Stepper from './components/Stepper';
import OrganisationStep from './steps/OrganisationStep';
import KnowledgeStep from './steps/KnowledgeStep';
import type { StepOptionType, StepType } from './types';

const steps: StepOptionType[] = [
  { name: 'organisation', number: 1, label: 'Organisation' },
  { name: 'knowledge', number: 2, label: 'Knowledge' },
];

function App() {
  const [currentStep, setCurrentStep] = useState<StepType>('organisation');

  return (
    <>
      <header className="border-gray flex justify-between border-b p-3">
        <img alt="Human Beam logo" src={logoImg} />

        <Stepper steps={steps} currentStep={currentStep} />

        <Button>Sign up</Button>
      </header>

      <main>
        {currentStep === 'organisation' && <OrganisationStep />}
        {currentStep === 'knowledge' && <KnowledgeStep />}
      </main>
    </>
  );
}

export default App;
