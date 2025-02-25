import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <FileQuestion className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground" />
      <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground">
        404 - Página no encontrada
      </h1>
      <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Button asChild className="mt-4 px-4 py-2 text-sm sm:text-base">
        <Link href="/">Ir a la página principal</Link>
      </Button>
    </div>
  );
};

export default NotFound;
