type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ children, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} className="bg-primary hover:bg-primary-dark active:bg-primary-dark cursor-pointer rounded-sm px-3 py-1 text-sm text-white">
      {children}
    </button>
  );
};

export default Button;
