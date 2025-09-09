// components/Layout/Menu/Menu.tsx
"use client";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { adminMenu, coachMenu } from "@/app/components/Menu/menuApp";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

interface MenuProps {
  menuName: string;
}

interface MenuItem {
  nav: string;
  link: string;
}

interface MenuGroup {
  tabsName: string;
  menus: MenuItem[];
}

function Menu({ menuName }: MenuProps) {
  const router = useRouter();

  return (
    <div className={cx("menu-wrapper")}>
      <div className={cx("menu-content")}>
        {/* Admin menu */}
        {adminMenu.map((item: MenuGroup, index: number) => {
          if (menuName === item.tabsName) {
            return (
              <ul key={`admin-${index}`}>
                {item.menus.map((menu: MenuItem, idx: number) => (
                  <li
                    key={`admin-item-${idx}`}
                    onClick={() => router.push(menu.link)}
                  >
                    {menu.nav}
                  </li>
                ))}
              </ul>
            );
          }
        })}

        {/* Coach menu */}
        {coachMenu.map((item: MenuGroup, index: number) => {
          if (menuName === item.tabsName) {
            return (
              <ul key={`coach-${index}`}>
                {item.menus.map((menu: MenuItem, idx: number) => (
                  <li
                    key={`coach-item-${idx}`}
                    onClick={() => router.push(menu.link)}
                  >
                    {menu.nav}
                  </li>
                ))}
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Menu;
