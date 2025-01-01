import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface MaintenanceProviderProps {
  renderApp: React.ReactNode;
  renderMaintenancePage: React.ReactNode;
}

const MaintenanceProvider = ({
  renderApp,
  renderMaintenancePage,
}: MaintenanceProviderProps) => {
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);

  useEffect(() => {
    // Simulate an API call to check maintenance status
    const checkMaintenanceStatus = async () => {
      // Replace this with your actual API call
      const response = await fetch("/api/maintenance-status");
      const data = await response.json();
      setIsUnderMaintenance(data.isUnderMaintenance);
    };

    checkMaintenanceStatus();
  }, []);

  if (isUnderMaintenance) {
    return <>{renderMaintenancePage}</>;
  }

  return <>{renderApp}</>;
};

const App = () => {
  return (
    <div>
      <h1>Welcome to the Application!</h1>
      {/* Your app components go here */}
    </div>
  );
};

const MaintenancePage = () => {
  return (
    <div>
      <h1>Site Under Maintenance</h1>
      <p>We are currently performing maintenance. Please check back later.</p>
    </div>
  );
};

const RootComponent = () => {
  return (
    <MaintenanceProvider
      renderApp={<App />}
      renderMaintenancePage={<MaintenancePage />}
    />
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
