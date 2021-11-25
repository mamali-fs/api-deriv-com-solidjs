import { NavLink } from "solid-app-router";
import type { Component } from "solid-js";
import { docsNavSignal, navMemo } from "../../Store/navigation-bar-store";
import { createSignal, Show, For } from "solid-js";
import arrowDownUrl from "../../assets/arrow_down.svg";
import closeSVGUrl from "../../assets/close.svg";
import hamburgerMenuUrl from "../../assets/hamburger_menu.svg";
import derivSvgUrl from "../../assets/deriv.svg";

export const NavigationBar: Component = () => {
  const [showDocumentationItems, setShowDocumentationItems] =
    createSignal(false);
  const [showMobileNav, setShowMobileNav] = createSignal(false);
  const navs = navMemo;
  const [docsNav] = docsNavSignal;

  return (
    <div
      aria-label="Deriv API Navigation"
      class="bg-[#0e0e0e] w-full flex flex-col desktop:items-center "
    >
      <div class="inner-shadow w-full h-8 flex items-center mobile:hidden">
        <div class="text-white-gray w-4/5 text-xs my-0 mx-auto">
          <a class="pr-10" href="https://deriv.com">
            Deriv website
          </a>
          <a class="pr-10" href="https://deriv.com/about">
            About us
          </a>
          <a class="pr-10" href="https://deriv.com/contact-us">
            Contact us
          </a>
        </div>
      </div>
      <header class="h-[73px] w-4/5 mobile:h-[48px] mobile:pl-4 mobile:w-full mobile:flex">
        <section class="flex items-center">
          <img
            class="desktop:hidden mobile:mr-2.5"
            src={showMobileNav() ? closeSVGUrl : hamburgerMenuUrl}
            alt="Deriv Logo"
            width="16"
            height="16"
            onclick={() => setShowMobileNav(!showMobileNav())}
          />
          <NavLink class="flex items-center text-white" href="/">
            <img
              src={derivSvgUrl}
              class="h-[73px] w-[180px] mobile:h-auto mobile:w-[84px]"
              height="73"
              width="180"
              alt="Deriv Logo"
            />
            <h1 class="inline ml-6 text-2xl  mobile:text-base mobile:ml-2">
              API
            </h1>
          </NavLink>
          <nav class="flex flex-row ml-5% mobile:hidden">
            <For each={navs()}>
              {(item) => (
                <NavLink
                  aria-label={`Go to ${item.label}`}
                  activeClass="after:active-page after:navigation-transition"
                  href={item.path}
                  class="relative text-base mr-10 text-white before:active-page hover:before:navigation-transition"
                  end={item.path === "/"}
                >
                  {item.label}
                </NavLink>
              )}
            </For>
          </nav>
        </section>
      </header>
      <section
        class={`fixed bg-white top-[48px] h-[calc(100%+54px) w-[253px] overflow-hidden left-[-254px] text-base	burger ${
          showMobileNav() && "transition-left"
        }`}
      >
        <div class="flex flex-col h-full py-6 pr-4 pl-5">
          <div class="menu-wrapper">
            <For each={navs()}>
              {(item, index) => (
                <>
                  <Show data-index={index} when={item.path === "/docs"}>
                    <div class="py-2.5 px-2">
                      <div
                        class="font-bold px-4 items-center	"
                        onclick={() => {
                          setShowDocumentationItems(!showDocumentationItems());
                        }}
                      >
                        {item.label}
                        <img
                          width="16"
                          height="16"
                          class="float-right"
                          src={arrowDownUrl}
                        />
                      </div>
                      <Show when={showDocumentationItems()}>
                        <div class="px-4">
                          <For each={docsNav()}>
                            {(item, index) => (
                              <NavLink
                                data-index={index}
                                activeClass="before:mobile-nav-after  bg-gray-100 font-bold text-gray-500"
                                class="flex relative justify-start items-center py-2.5 pr-4 pl-2 mb-1.5 text-sm"
                                href={item.path}
                                end
                              >
                                {item.label}
                              </NavLink>
                            )}
                          </For>
                        </div>
                      </Show>
                    </div>
                  </Show>
                  <Show when={item.path !== "/docs"}>
                    <div class="py-2.5 px-2 align-middle">
                      <NavLink
                        activeClass="before:mobile-nav-after "
                        class="font-bold flex relative items-center px-4"
                        href={item.path}
                        end
                      >
                        {item.label}
                      </NavLink>
                    </div>
                  </Show>
                </>
              )}
            </For>
          </div>
        </div>
      </section>
    </div>
  );
};
