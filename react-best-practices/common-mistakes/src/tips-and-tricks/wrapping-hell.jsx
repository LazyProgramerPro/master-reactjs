import { Provider as ReduxProvider } from "react-redux";
import { IntlProvider } from "react-intl";
import store from "./store"; // Assuming you have a Redux store set up
import { UserContext } from "./contexts/UserContext"; // Assuming you have a UserContext set up
import { ThemeContext } from "./contexts/ThemeContext"; // Assuming you have a ThemeContext set up
import messages from "./locales/messages"; // Assuming you have localization messages
import { buildProvidersTree } from "./6-2";

const ProvidersTree = buildProvidersTree([
  [ThemeContext.Provider],
  [UserContext.Provider],
  [ReduxProvider, { store }],
  [IntlProvider, { locale: "en", messages: messages["en"] }],
]);

const RootComponent = () => {
  return (
    <ProvidersTree>
      <div>comonent tree...</div>
    </ProvidersTree>
  );
};

export default RootComponent;
