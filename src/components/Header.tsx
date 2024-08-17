import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCog } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  pageName: string;
  showSettingsIcon?: boolean;
  className?: string; // Optional className prop
}

const Header: React.FC<HeaderProps> = ({
  pageName,
  showSettingsIcon = false,
  className = "", // Provide a default empty string
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const tma = window.Telegram.WebApp;

  useEffect(() => {
    if (tma) {
      tma.BackButton.isVisible = location.pathname !== "/main";

      const handleBackButtonClick = () => {
        if (location.pathname === "/") {
          tma.close();
        } else {
          navigate(-1);
        }
      };

      tma.onEvent("backButtonClicked", handleBackButtonClick);
      return () => tma.offEvent("backButtonClicked", handleBackButtonClick);
    }
  }, [location.pathname, navigate, tma]);

  return (
    <div
      className={`${className} relative flex mb-auto items-center justify-center w-full max-w-lg mx-auto mt-8`}
    >
      {location.pathname !== "/" && (
        <button
          onClick={() => {
            tma.BackButton.onClick();
            navigate(-1);
          }}
          className="btn btn-ghost absolute left-0 ml-6"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
      )}
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
