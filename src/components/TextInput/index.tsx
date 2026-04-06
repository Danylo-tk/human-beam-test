import { forwardRef } from 'react';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
  error?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <input ref={ref} {...props} className="border-gray h-8 w-72 rounded-sm border px-2" />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
});

export default TextInput;
