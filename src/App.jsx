import { Button } from "@/components/ui/button";
import { toast } from "sonner";
function App() {
  const generateToast = () => {
    toast.success("A lovely toast!");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold hover:text-blue-300">
        React + Vite + Tailwind
      </h1>
      <Button
        className="bg-blue-400 text-white hover:bg-blue-300 hover:animate-bounce m-4"
        onClick={generateToast}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
