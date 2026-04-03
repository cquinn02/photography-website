'use client'
// Temporary stub — just renders children directly
export default function LazySection({ children, height }: { children: React.ReactNode; height?: string }) {
  return <div style={{ minHeight: height }}>{children}</div>
}
