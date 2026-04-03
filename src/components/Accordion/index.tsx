import { ChevronIcon } from '../../assets/icons';

type AccordionProps = {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const Accordion = ({ label, children, isOpen, onToggle }: AccordionProps) => {
  return (
    <div className="border-gray rounded-lg border py-3">
      <button onClick={onToggle} className="flex items-center gap-3 px-3 text-sm font-medium">
        <div className="flex w-4 items-center justify-center">
          <ChevronIcon className={`transition-transform duration-200 ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
        </div>

        {label}
      </button>

      {isOpen && <div className="pl-10">{children}</div>}
    </div>
  );
};

export default Accordion;
