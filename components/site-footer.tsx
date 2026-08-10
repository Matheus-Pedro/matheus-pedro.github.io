export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="section flex items-center justify-center py-8 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Matheus Pedro Caprioli</p>
      </div>
    </footer>
  );
}
