import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
}

export const Navbar = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { label: "Inicio", path: "/" },
    { label: "Login", path: "/Login" },
    { label: "Usuarios", path: "/usuarios" },
    { label: "Cursos", path: "/cursos" },
    { label: "Suscripciones", path: "/suscripciones" }
  ]);

  const [usuario, setUsuario] = useState<string | null>(null);

  useEffect(() => {
    const sesion = localStorage.getItem("usuarioLogueado");
    setUsuario(sesion);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "/Login";
  };

  return (
    <nav style={{ marginBottom: "1rem" }}>
      {menuItems.map((item, index) => (
        <span key={item.path} style={{ marginRight: "1rem" }}>
          <Link to={item.path}>{item.label}</Link>
          {index < menuItems.length - 1 && " | "}
        </span>
      ))}

      {usuario && (
        <span style={{ marginLeft: "2rem", color: "lightgreen" }}>
          ✅ {usuario} |
          <button
            onClick={handleLogout}
            style={{
              marginLeft: "0.5rem",
              background: "darkred",
              color: "white",
              border: "none",
              padding: "3px 8px",
              cursor: "pointer"
            }}
          >
            Cerrar sesión
          </button>
        </span>
      )}
    </nav>
  );
};

export default Navbar;
