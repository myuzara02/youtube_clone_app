import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'

const contaner = document.getElementById('root');
const root = createRoot(contaner);

root.render(<App />)
