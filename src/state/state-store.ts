import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface LanguageState {
  language: string
  setLanguage: (language: string) => void
}

export const useLanguageStore = create<LanguageState>()(
  devtools(
    persist(
      (set) => ({
        language: "en",
        setLanguage: (language) => set((state: LanguageState) => ({ language: language })),
      }),
      {
        name: 'language-storage',
      },
    ),
  ),
)
