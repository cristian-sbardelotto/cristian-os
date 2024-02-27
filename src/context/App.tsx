import { ReactNode, createContext, useState } from 'react';

import { Apps } from '../types/apps';

type AppContextProps = {
  openedApp: Apps | 'none';
  openApp: (app: Apps) => void;
  closeApp: () => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextProps>({
  openedApp: 'none',
  closeApp: () => {},
  openApp: () => {},
});

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [openedApp, setOpenedApp] = useState<Apps | 'none'>('none');

  function closeApp() {
    setOpenedApp('none');
  }

  function openApp(app: Apps) {
    setOpenedApp(app);
  }

  return (
    <AppContext.Provider
      value={{
        openedApp,
        openApp,
        closeApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
