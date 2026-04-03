type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

const variants = {
  primary: 'bg-primary hover:bg-primary-dark active:bg-primary-dark text-white',
  secondary: 'bg-primary/10 hover:bg-primary/15 text-primary/90',
};

const Button = ({ children, type = 'button', variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`${variants[variant]} h-8 cursor-pointer rounded-sm px-3 py-1 text-sm`}>
      {children}
    </button>
  );
};

export default Button;
