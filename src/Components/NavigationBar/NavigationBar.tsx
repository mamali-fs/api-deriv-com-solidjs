import { NavLink } from 'solid-app-router';
import type { Component } from 'solid-js'
import { navSignal } from '../../Store/navigation-bar-store'

export const NavigationBar: Component = () => {
    const [navs] = navSignal;

    return (
        <div class='bg-[#0e0e0e] w-full flex flex-col items-center'>
            <div class='inner-shadow w-full h-8 flex items-center'>
            <div class='text-white-gray w-4/5 text-xs my-0 mx-auto'>
                <a class='pr-10' href="https://deriv.com">Deriv website</a>
                <a class='pr-10' href='https://deriv.com/about'>About us</a>
                <a class='pr-10' href="https://deriv.com/contact-us">Contact us</a>
            </div>
            </div>
      <header class='h-[73px] w-4/5'>
        <section class="flex items-center">
            <NavLink class="flex items-center text-white"  href="/">
            <img src='/src/assets/deriv.svg' height='73' width="180" alt="Deriv Logo"/>
            <h1 class='inline ml-6 text-2xl'>API</h1>
            </NavLink>
          <nav id="navbar" class="flex-container navbar ml-5% flex flex-row">
              {navs().map(n => <NavLink activeClass="after:active-page after:navigation-transition" href={n.path} class="relative text-base mr-10 text-white before:active-page hover:before:navigation-transition" end>{n.label}</NavLink>)}
          </nav>
        </section>
      </header>
        </div>
    );
}

