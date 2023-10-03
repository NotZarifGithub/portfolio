const React = require("react");
const { ThemeProvider: NextThemesProvider } = require("next-themes");
const ThemeProviderProps = require("next-themes/dist/types").type;

function ThemeProvider({ children, ...props }) {
  return React.createElement(NextThemesProvider, { ...props }, children);
}

module.exports = ThemeProvider;
