"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

const Loading = () => {
  const t = useTranslations("LoadingPage");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 animate-spin text-primary" />
      <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground">
        {t(`h1`)}
      </h1>
      <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md">
        {t(`p`)}
      </p>
    </div>
  );
};

export default Loading;
