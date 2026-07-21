/// <reference types="astro/client" />

// Los paquetes @fontsource son imports de side-effect (solo CSS) y no traen
// declaraciones de tipos. Esto evita el error TS2882 al importarlos.
declare module "@fontsource-variable/*";
