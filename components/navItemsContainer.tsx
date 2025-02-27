"use client";
import { useTranslations } from "next-intl";
import NavItem from "./navItem";

interface Props {
  onToggle?: () => void;
}

const NavItemsContainer = ({ onToggle }: Props) => {
  const t = useTranslations("NavItems");

  return (
    <div className="flex flex-col md:flex-row md:gap-8 md:items-center h-max md:h-auto space-y-4 md:space-y-0 mt-8 md:mt-0 font-bold">
      <NavItem href="/" onClick={onToggle}>
        {t(`home`)}
      </NavItem>
      <NavItem href="/temporadas" onClick={onToggle}>
        {t(`seasons`)}
      </NavItem>
      <NavItem href="/personajes" onClick={onToggle}>
        {t(`cast`)}
      </NavItem>
      <NavItem href="/recomendaciones" onClick={onToggle}>
        {t(`recommendations`)}
      </NavItem>
    </div>
  );
};

export default NavItemsContainer;
