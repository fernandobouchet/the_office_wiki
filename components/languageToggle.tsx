"use client";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const LanguageToggle = ({ ...props }: Props) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() => handleLanguageChange(locale === "es" ? "en" : "es")}
      {...props}
    >
      <span className="h-[1.2rem] w-[1.2rem]">
        {locale === "es" ? "EN" : "ES"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
