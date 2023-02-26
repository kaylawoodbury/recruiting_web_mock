import { CssBaseline, ThemeProvider } from '@material-ui/core';
import useSettings from './hooks/useSettings';
import { createCustomTheme } from './theme';
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const { settings } = useSettings();
  const content = useRoutes(routes);

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
    </ThemeProvider>
  );
};

export default App;