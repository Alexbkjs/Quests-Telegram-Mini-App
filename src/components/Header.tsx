import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCog } from "@fortawesome/free-solid-svg-icons";

// Props for the component
interface HeaderProps {
  pageName: string;
  showSettingsIcon?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  pageName,
  showSettingsIcon = false,
}) => {
  return (
    <div className="relative flex mt-12 mb-auto items-center justify-center w-full max-w-lg mx-auto flex-grow">
      <Link to="/" className="btn btn-ghost absolute left-0 ml-6">
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </Link>
      <h2 className="text-xl">{pageName}</h2>
      {showSettingsIcon && (
        <Link to="" className="btn btn-ghost absolute right-0 mr-6">
          <FontAwesomeIcon icon={faCog} size="lg" />
        </Link>
      )}
    </div>
  );
};

export default Header;
