function Header({ onSearch }) {
  return (
    <header className="header">
      <h1>WikiPaíses</h1>
      
      <input 
        type="text" 
        placeholder="Pesquise aqui" 
        onChange={(evento) => onSearch(evento.target.value)}
      />
    </header>
  )
}

export default Header;