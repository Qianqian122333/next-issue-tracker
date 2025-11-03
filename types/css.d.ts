// Allow importing plain CSS files (side-effect imports) in TypeScript
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Specific allowance for style imports from node_modules packages
declare module '@radix-ui/themes/styles.css';
