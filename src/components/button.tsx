type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`bg-[#1E6F9F] w-full max-w-[736px] h-[52px] text-white font-bold text-sm py-2 px-4 rounded-lg cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
