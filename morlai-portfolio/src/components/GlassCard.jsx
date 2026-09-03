export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`
        glass rounded-2xl p-6
        ${hover ? 'transition-all duration-300 hover:bg-white/[0.07] hover:border-white/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
