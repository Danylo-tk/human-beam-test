import { CheckIcon } from '../../assets/icons';

type StepperProps = {
  steps: { number: number; label: string }[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className="flex gap-3">
      {steps.map((step, index) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;
        const isUpcoming = step.number > currentStep;

        return (
          <div key={step.number} className="flex w-44 items-center gap-2">
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] ${isCompleted && 'bg-gray-dark text-white'} ${isActive && 'bg-primary text-white'} ${isUpcoming && 'bg-gray text-gray-dark'}`}
            >
              {isCompleted ? <CheckIcon /> : step.number}
            </div>

            <span className={`${isCompleted && 'text-gray-dark'} ${isActive && 'text-black-b1 font-semibold'} ${isUpcoming && 'text-black-b1'}`}>
              {step.label}
            </span>

            {index < steps.length - 1 && <div className="h-0.5 w-full bg-gray-200" />}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
