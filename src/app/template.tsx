/** Se vuelve a montar en cada navegación: entrada suave de la página. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
