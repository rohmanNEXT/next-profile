// import { ThemeProvider } from './context/ThemeContext';
import SettingsModal from './components/SettingsModal';
import HomePage from './pages/HomePage/page';

export default function Home() {
  return (
 
      <div className="min-h-screen transition-colors duration-300">

        <main className="pt-0">
          {/* Halaman utama di sini */}
        </main>
        <HomePage />
        <SettingsModal />
      </div>
   
  );
}
