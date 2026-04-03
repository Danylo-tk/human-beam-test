type TextAreaProps = {
  placeholder?: string;
};

const TextArea = ({ placeholder }: TextAreaProps) => {
  return <textarea placeholder={placeholder} rows={4} className="border-gray h-32 w-full resize-none rounded-sm border p-2" />;
};

export default TextArea;
