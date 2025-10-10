// Color mapping for Tailwind CSS class generation
const colorClasses = {
  "ink-black": "text-ink-black",
  "brown-tertiary": "text-brown-tertiary",
  "brown-secondary": "text-brown-secondary", 
  "brown-primary": "text-brown-primary",
  "blue-primary": "text-blue-primary",
  "blue-secondary": "text-blue-secondary",
  "blue-tertiary": "text-blue-tertiary",
  "paper-white": "text-paper-white",
} as const;

// English headings with font-sans
export function H1({ children, className = "", color = "ink-black" }: { children: React.ReactNode; className?: string; color?: keyof typeof colorClasses }) {
  return <h1 className={`text-4xl md:text-5xl font-semibold font-sans ${colorClasses[color]} ${className}`}>{children}</h1>;
}

export function H2({ children, className = "", color = "ink-black" }: { children: React.ReactNode; className?: string; color?: keyof typeof colorClasses }) {
  return <h2 className={`text-2xl md:text-3xl  font-sans ${colorClasses[color]} ${className}`}>{children}</h2>;
}

export function H3({ children, className = "", color = "ink-black" }: { children: React.ReactNode; className?: string; color?: keyof typeof colorClasses }) {
  return <h3 className={`text-xl md:text-2xl font-sans ${colorClasses[color]} ${className}`}>{children}</h3>;
}

// Chinese headings with font-lxgw-wenkai-tc
export function ChineseH1({ children, className = "", color = "ink-black" }: { children: React.ReactNode; className?: string; color?: keyof typeof colorClasses }) {
  return <h1 className={`text-4xl md:text-5xl font-semibold font-lxgw-wenkai-tc ${colorClasses[color]} ${className}`}>{children}</h1>;
}

export function ChineseH2({ children, className = "", color = "ink-black" }: { children: React.ReactNode; className?: string; color?: keyof typeof colorClasses }) {
  return <h2 className={`text-2xl md:text-3xl font-lxgw-wenkai-tc ${colorClasses[color]} ${className}`}>{children}</h2>;
}

export function ChineseH3({ children, className = "", color = "ink-black" }: { children: React.ReactNode; className?: string; color?: keyof typeof colorClasses }) {
  return <h3 className={`text-xl md:text-2xl font-lxgw-wenkai-tc ${colorClasses[color]} ${className}`}>{children}</h3>;
}
