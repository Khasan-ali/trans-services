'use client'

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext()

export function LangComponent({ children }) {
       const [langState, setLangState] = useState('uz');

       return (
              <LanguageContext.Provider value={{langState, setLangState}}>
                     {children}
              </LanguageContext.Provider>
       )
}

export function useLanguageContext() {
       return useContext(LanguageContext)
}