import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 animate-spin text-primary" />
      <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground">
        Cargando...
      </h1>
      <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md">
        Por favor, espere mientras obtenemos el contenido.
      </p>
    </div>
  );
};

export default Loading;
