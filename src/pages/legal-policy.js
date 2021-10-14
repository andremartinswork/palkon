// NEXT
import dynamic from 'next/dynamic';

// MOLECULES
const NavbarLegal = dynamic(() => import('../compoments/molecules/navbars/navbarLegal'));

// ORGANISMS
const Legal = dynamic(() => import('../compoments/organisms/legal'));

// DATA
import dataLegal from "../compoments/organisms/legal/data";

export default function LegalPolicy() {
  return (
    <>
      <NavbarLegal />
      <Legal {...dataLegal} />
    </>
  );
}
