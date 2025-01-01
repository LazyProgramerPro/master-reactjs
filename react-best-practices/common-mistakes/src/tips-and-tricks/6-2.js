export const buildProvidersTree = (componentsWithProps) => {
  const initialComponent = ({ children }) => <>{children}</>;
  return componentsWithProps.reduce(
    (AccuComponents, [Provider, props = {}]) => {
      return ({ children }) => {
        return (
          <AccuComponents>
            <Provider {...props}>{children}</Provider>
          </AccuComponents>
        );
      };
    },
    initialComponent
  );
};

{
  /* <initialComponents>
  <ThemeProvider theme={{ primaryColor: 'blue' }}>
    <UserProvider user={{ name: 'John Doe' }}>
      <SettingsProvider settings={{ darkMode: true }}>
        {children}
      </SettingsProvider>
    </UserProvider>
  </ThemeProvider>
</initialComponents> */
}
