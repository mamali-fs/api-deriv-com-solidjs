import { NavLink } from 'solid-app-router';
import type { Component } from 'solid-js'
import { navSignal } from '../../Store/navigation-bar-store'

export const NavigationBar: Component = () => {
    const [navs, _] = navSignal;

    return (
      <header>
        <div class="w-full h-[56px] bg-[#0e0e0e] text-white">
          <nav id="navbar" class="flex-container navbar">
            {navs().map(n => <NavLink href={n.path}>{n.label}</NavLink>)}
          </nav>
        </div>
      </header>
    );
}

