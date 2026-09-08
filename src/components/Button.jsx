export default function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'glass text-slate-200 hover:bg-white/10 hover:border-white/20',
    outline: 'border border-white/15 text-slate-200 hover:bg-white/5 hover:border-blue-400/40',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
