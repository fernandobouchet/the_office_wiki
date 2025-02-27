"use client";
import LanguageToggle from "./languageToggle";
import NavItemsContainer from "./navItemsContainer";
import ThemeToggle from "./themeToggle";
import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px] h-full flex">
        <SheetHeader>
          <SheetTitle hidden>Menú</SheetTitle>
          <SheetDescription hidden />
        </SheetHeader>
        <NavItemsContainer onToggle={toggleMenu} />
        <div className="absolute bottom-0 flex right-0">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
