// This file is used to suppress specific warnings that can occur during development
// It must be imported before any other imports in the application entry point

const originalWarn = console.warn;

console.warn = (...args) => {
  // Suppress "Multiple instances of Three.js" warning
  // This warning is often a false positive in development environments with HMR
  if (args.length > 0 && typeof args[0] === 'string' && args[0].includes('Multiple instances of Three.js')) {
    return;
  }
  
  originalWarn(...args);
};
