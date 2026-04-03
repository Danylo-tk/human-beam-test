type TextInputProps = {
  label: string;
  placeholder?: string;
};

const TextInput = ({ label, placeholder }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-sm font-medium">
        {label}
      </label>

      <input type="text" placeholder={placeholder} name="" id="" className="border-gray h-8 w-72 rounded-sm border px-2" />
    </div>
  );
};

export default TextInput;
