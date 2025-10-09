// English headings with font-sans
export function H1({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h1 className={`text-4xl md:text-5xl font-semibold font-sans text-ink-black ${className}`}>{children}</h1>;
}

export function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-2xl md:text-3xl  font-sans text-ink-black ${className}`}>{children}</h2>;
}

export function H3({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-xl md:text-2xl font-sans text-ink-black ${className}`}>{children}</h3>;
}

// Chinese headings with font-lxgw-wenkai-tc
export function ChineseH1({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h1 className={`text-4xl md:text-5xl font-semibold font-lxgw-wenkai-tc text-ink-black ${className}`}>{children}</h1>;
}

export function ChineseH2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-2xl md:text-3xl font-lxgw-wenkai-tc text-ink-black ${className}`}>{children}</h2>;
}

export function ChineseH3({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-xl md:text-2xl font-lxgw-wenkai-tc text-ink-black ${className}`}>{children}</h3>;
}
