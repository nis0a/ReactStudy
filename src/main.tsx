import { createRoot } from 'react-dom/client';
// import { registerSW } from 'virtual:pwa-register';
import { App } from './pages/App';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<App />);

// registerSW();
