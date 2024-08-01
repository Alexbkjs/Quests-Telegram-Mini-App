import { Link } from "react-router-dom";

// Props for the component
interface HeaderProps {
  pageName: string;
}

const Header: React.FC<HeaderProps> = ({ pageName }) => {
  return (
    <div className="relative flex mt-16 items-center justify-center w-full">
      <Link
        to="/"
        className={`btn btn-ghost absolute ml-10 left-0 fa-solid fa-chevron-left`}
      ></Link>
      <h2 className="text-2xl">{pageName}</h2>
    </div>
  );
};

export default Header;
