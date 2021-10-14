// MOLECULES
import NavbarLegal from "../compoments/molecules/navbars/navbarLegal";

// ORGANISMS
import Legal from "../compoments/organisms/legal";

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
