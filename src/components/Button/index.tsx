type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outlined';
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary: 'bg-primary hover:bg-primary-dark active:bg-primary-dark text-white',
  secondary: 'bg-primary/10 hover:bg-primary/15 text-primary/90',
  outlined: 'border border-primary/50 text-primary hover:bg-blue-b1',
};

const Button = ({ children, type = 'button', variant = 'primary', onClick, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} h-8 rounded-sm px-3 py-1 text-sm ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}
    >
      {children}
    </button>
  );
};

export default Button;
