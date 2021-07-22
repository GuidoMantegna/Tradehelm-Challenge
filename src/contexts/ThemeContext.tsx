import React from 'react';

// Creamos el context (arranca como light)
const ThemeContext = React.createContext('light');

// Exportamos el provider
export const ThemeProvider = ThemeContext.Provider;

// Exportamos el context
export default ThemeContext;

/* 
Export default se importa con las llaves, mientras que el named export no necesita las llaves para ser importado.
Export default puede haber uno solo, mientras que named export puede haber muchos.
*/