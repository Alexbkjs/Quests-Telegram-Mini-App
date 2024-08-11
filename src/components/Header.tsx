// export default Header;
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const tma = window.Telegram.WebApp;

  useEffect(() => {
    if (tma) {
      // Set the back button visibility based on the current page
      if (location.pathname === "/main") {
        tma.BackButton.isVisible = false; // Hide back button on the main page
      } else {
        tma.BackButton.isVisible = true; // Show back button on other pages
      }

      // Function to handle the back button click
      const handleBackButtonClick = () => {
        if (location.pathname === "/") {
          tma.close(); // Close the app on the main page
        } else {
          navigate(-1); // Navigate back on other pages
        }
      };

      // Set up the back button click handler
      tma.onEvent("backButtonClicked", handleBackButtonClick);

      // Clean up event listener on component unmount
      return () => {
        tma.offEvent("backButtonClicked", handleBackButtonClick);
      };
    }
  }, [location.pathname, navigate, tma]);

  return (
    <div className="relative flex mt-12 mb-auto items-center justify-center w-full max-w-lg mx-auto flex-grow">
      {location.pathname !== "/" && (
        <button
          onClick={() => {
            tma.BackButton.onClick();
            navigate(-1);
          }}
          className="btn btn-ghost absolute left-0 ml-6"
        >
          <>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            {console.log("button clicked")}
          </>
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
