function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} KyaooApps</span>
        <span></span>
      </div>
    </footer>
  )
}

export default Footer
