
"use client";
import React, {useState} from 'react'
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";

const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

export default function Links() {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
             {session?.user ? (
            <>
              {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                  <form action={handleLogout}>
                    <button className={styles.logout}>Logout</button>
                  </form>
            </>
              ) : (
                <NavLink item={{ title: "Login", path: "/login" }} />
              )}
        </div>
        {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}
