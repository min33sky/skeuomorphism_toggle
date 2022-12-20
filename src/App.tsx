import BasicToggle from './components/BasicToggle';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-tr from-slate-700 to-slate-600">
      <BasicToggle />
      <DarkModeToggle />
    </div>
  );
}
