import { forwardRef } from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ error, ...props }, ref) => {
  return (
    <div>
      <textarea ref={ref} rows={4} className="border-gray h-32 w-full resize-none rounded-sm border p-2" {...props} />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
});

export default TextArea;
