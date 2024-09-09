import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  function navigateLanding() {
    navigate("/");
  }
  function navigateDashboard() {
    navigate("/dashboard");
  }
  return (
    <div className="topbar">
      <button className="button-no-background" onClick={navigateLanding}>
        Landing Page
      </button>
      <button className="button-no-background" onClick={navigateDashboard}>
        Dashboard
      </button>
    </div>
  );
}

export default TopBar;
