import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 px-12 shadow-[0_0_2px_2px_rgba(0,0,0,0.2)] fixed left-0 right-0 top-0">
      <h1>React Form With</h1>
      <nav className="flex gap-4 items-center">
        <Link to="">useState</Link>
        <Link to="form1">useFormStatus</Link>
        <Link to="form2">useActionState</Link>
        <Link to="form3">Form3</Link>
      </nav>
    </header>
  );
};

export default Header;
