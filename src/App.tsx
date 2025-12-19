import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home/page";
import { AppSidebar } from "./common/app-sidebar";
import DarkVeil from "./components/DarkVeil";

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-full h-screen fixed top-0 left-0 pointer-events-none overflow-hidden">
        <DarkVeil hueShift={0} speed={2} scanlineIntensity={0} />
      </div>
      <section className="fixed left-10 top-0 h-screen w-20 border-border flex-col flex items-start justify-center pt-8 z-50">
        <AppSidebar />
      </section>
      <div className="w-full z-10 relative h-screen">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
