import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function Navigation() {
  const mobileNavToggle = () => {
    if (typeof window !== 'undefined') {
      const toggle = document.getElementById('navbar-toggle');
      const menu = document.getElementById('navbarBasicExample');
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      toggle.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    }
  };
  return (
    <nav
      className="navbar is-dark py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item is-size-4-touch is-size-4 has-text-weight-bold">
          <Link
            href="/"
          >
            Chris LaRocque
          </Link>
        </div>
        <button
          id="navbar-toggle"
          type="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          tabIndex={0}
          data-target="navbarBasicExample"
          onClick={mobileNavToggle}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              <Link href="/projects"> Projects </Link>
            </div>
            <div className="navbar-dropdown">
              <div className="navbar-item">
                <Link href="/projects/gatsby-v3-migration">
                  Gatsby v3 Migration
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/projects/larocque-dev">
                  LaRocque.dev
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/projects/greenhouse-jobs-board">
                  Greenhouse jobs board
                </Link>
              </div>
              <div className="navbar-item">
              <Link
                href="/projects/lambda-sitemap-generator"
              >
                Lambda sitemap generator
              </Link>
              </div>
              <div className="navbar-item">
              <Link href="/projects/wifeapedia">
                Wifeapedia
              </Link>
              </div>
              <div className="navbar-item">
              <Link href="/projects/brightcove" >
                Brightcove
              </Link>
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
            <Link href="/tech"> Tech </Link>
            </div>
            <div className="navbar-dropdown">
              <div className="navbar-item">
              <Link href="/tech/react"> React </Link>
              </div>
              <div className="navbar-item">
              <Link href="/projects/vue"> Vue </Link>
              </div>
            </div>
          </div>
          <div className="navbar-item">
          <Link href="/me"> About + Contact </Link>
          </div>
            {/* <Link href="/search">
              <div className="navbar-item">
                <Icon name="Search" />
              </div>
            </Link> */}
        </div>
      </div>
    </nav>
  );
}
