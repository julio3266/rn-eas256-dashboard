import React, { createContext, ReactNode } from 'react';

import { Theme, theme } from './Theme';

export const ThemeContext = createContext<Theme>(theme);

interface Props {
    children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
