export const Nav = ({ children }) => {
    return (
      <nav className="nav-bar">
        {children}
      </nav>
    );
  };
  
  export function Logo() {
    return (
      <div className="logo">
        <span role="img" aria-label="palomitas">🍿</span>
        <h1>Palomitas de Papel</h1>
      </div>
    );
  }
  
  export function Search({ query, setQuery }) {
    return (
      <input
        className="search"
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }
  
  export function NumResults({ movies }) {
    return (
      <p className="num-results">
        <strong>{movies.length}</strong> resultados encontrados
      </p>
    );
  }
  