// ScrollContext.tsx
import { createContext } from 'react';

const ScrollContext = createContext<(id: string) => void>(() => {});

export default ScrollContext;