interface NaveItems {
  links: { label: string; to: string }[];
}

const baseStyleNavBar =
  "bg-rose-500 flex justify-around shadow-sm hover:shadow-xl text-xl";

const NavHref = ({ links }: NaveItems) => {
  return (
    <nav className={baseStyleNavBar}>
      {links.map((link) => (
        <a href={link.to}>{link.label}</a>
      ))}
    </nav>
  );
};

export default NavHref;
