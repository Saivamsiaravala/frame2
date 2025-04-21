import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { id: 1, name: "Bills", path: "bills" },
    { id: 2, name: "Receipts", path: "receipts" },
    { id: 3, name: "Bank", path: "Bank" },
  ];
  return (
    <nav>
      <div className="easy">Easy Upload</div>
      <div className="options">
        <div className="links">
          {links.map((link) => {
            return (
              <NavLink
                to={link.path}
                key={link.id}
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
        <div className="close">X</div>
      </div>
    </nav>
  );
};

export default Header;
