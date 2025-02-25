import { Link } from "@/i18n/routing";

interface Props {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: Props) => {
  return (
    <Link
      href={href}
      className="text-primary hover:text-opacity-70 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavItem;
