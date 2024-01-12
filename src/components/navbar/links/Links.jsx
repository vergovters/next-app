
"use client";
import React from 'react'
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
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
        </div>
    </div>
  )
}
