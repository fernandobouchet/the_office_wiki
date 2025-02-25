"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-destructive" />
      <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground">
        ¡Ups! Algo salió mal.
      </h1>
      <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md">
        Lo sentimos, pero ocurrió un error al procesar su solicitud.
      </p>
      <Button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 text-sm sm:text-base"
      >
        Intentar de nuevo
      </Button>
    </div>
  );
};

export default Error;
