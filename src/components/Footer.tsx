const year = new Date().getFullYear()

export const Footer = () => {
  return <footer className="border-t border-border py-8 text-center">
    <p className="text-xs text-text-muted">
      © {year} gazentia.dev — Built with React
    </p>
  </footer>
}