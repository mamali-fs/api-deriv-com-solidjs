import { NavLink } from "solid-app-router";
import type { Component } from "solid-js";
import { docsNavSignal } from "../../Store/navigation-bar-store";
import { For } from "solid-js";

export const SideBar: Component = () => {
  const [navs, _] = docsNavSignal;
  return (
    <div class="flex flex-col border-r-2 border-[#f5f4f4] text-[#333333]">
      <div class="flex flex-col relative w-full">
        <p class="flex relative justify-start items-center text-3xl mb-6 ml-1 font-bold">
          Deriv API
        </p>
        <For each={navs()}>
          {(item, index) => (
            <NavLink
              data-index={index}
              activeClass="before:sidebar before:bg-red-600 bg-gray-100 font-bold text-black"
              class="flex relative justify-start items-center py-2.5 pr-4 pl-4 mb-4 text-base rounded-l-md h-11 text-gray-500 hover:bg-gray-100 hover:before:sidebar hover:before:bg-red-100"
              href={`/docs${item.path}`}
              end
            >
              {item.label}
            </NavLink>
          )}
        </For>
      </div>
    </div>
  );
};
