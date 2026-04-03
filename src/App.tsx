import './App.css';
import logoImg from './assets/HB-logo.svg';
import Button from './components/Button';
import Stepper from './components/Stepper';

const steps = [
  { number: 1, label: 'Character' },
  { number: 2, label: 'Organisation' },
];

function App() {
  return (
    <>
      <div className="border-gray flex justify-between border-b p-3">
        <img alt="Human Beam logo" src={logoImg} />

        <Stepper steps={steps} currentStep={2} />

        <Button>Sign up</Button>
      </div>
    </>
  );
}

export default App;
