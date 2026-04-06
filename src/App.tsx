import { useState } from 'react';
import logoImg from './assets/HB-logo.svg';
import Button from './components/Button';
import Stepper from './components/Stepper';
import OrganisationStep from './steps/OrganisationStep';
import KnowledgeStep from './steps/KnowledgeStep';
import type { FormDataType, StepOptionType, StepType } from './types';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { buildPrompt } from './utils/prompts';
import { createTavusPersona, generateSystemPrompt } from './utils/api';
import { AlertIcon } from './assets/icons';

const steps: StepOptionType[] = [
  { name: 'organisation', number: 1, label: 'Organisation' },
  { name: 'knowledge', number: 2, label: 'Knowledge' },
];

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
    const prompt = buildPrompt(data.avatarType || 'course', data);

    let systemPrompt: string;
    try {
      systemPrompt = await toast.promise(generateSystemPrompt(prompt), {
        loading: 'Request to OpenAI sent.\n\nGenerating system prompt…',
        success: 'System prompt ready',
        error: 'Failed to generate system prompt',
      });
    } catch {
      return;
    }

    try {
      await toast.promise(createTavusPersona(data.organisationName, systemPrompt), {
        loading: 'Creating Tavus persona…',
        success: 'Persona created successfully!',
        error: 'Failed to create Tavus persona',
      });
    } catch {
      return;
    }
  });

  return (
    <>
      <Toaster
        position="top-right"
        containerStyle={{ top: 80 }}
        toastOptions={{
          error: {
            style: {
              background: '#DC3E42',
              color: 'white',
            },
            icon: <AlertIcon />,
          },
        }}
      />

      <header className="border-gray sticky top-0 z-10 flex justify-between border-b bg-white p-3">
        <img alt="Human Beam logo" src={logoImg} />

        <Stepper steps={steps} currentStep={currentStep} />

        <Button>Sign up</Button>
      </header>

      <main className="flex justify-center">
        <div className="grid w-full max-w-3xl grid-cols-9 gap-8 py-10">
          <div className="col-span-5">
            {currentStep === 'organisation' && <OrganisationStep form={form} onContinue={() => setCurrentStep('knowledge')} />}
            {currentStep === 'knowledge' && <KnowledgeStep form={form} onBack={() => setCurrentStep('organisation')} onContinue={handleSubmit} />}
          </div>

          <div className="sticky top-26 z-10 col-span-4 h-125 overflow-hidden rounded-xl">
            <video controls className="h-full w-full object-cover">
              <source src="/avatar-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
