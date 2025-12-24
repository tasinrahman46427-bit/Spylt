import Image from "next/image";

import { navIcons, navLinks } from "@/constants";
import dayjs from "dayjs";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Image src={"/images/logo.svg"} alt="logo" height={20} width={20} />
        <p className="font-bold">Hello World</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image src={img} alt="" height={20} width={20} />
            </li>
          ))}
        </ul>

        <time> {dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}
