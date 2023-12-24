'use client';

import { createContext } from 'react';

export type ColorMode = 'light' | 'dark';

interface AnimeContextType {
	mode: ColorMode;
	toggleMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
	undefined
);
