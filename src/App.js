import { CssBaseline, ThemeProvider } from '@material-ui/core';
import useSettings from './hooks/useSettings';
import { createCustomTheme } from './theme';
import CandidateList from './components/CandidateList';

const App = () => {
  const { settings } = useSettings();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <CandidateList />
    </ThemeProvider>
  );
};

export default App;