// ScrollContext.tsx
import { createContext } from 'react';

const ScrollContext = createContext<(() => void) | undefined>(undefined);

export default ScrollContext;