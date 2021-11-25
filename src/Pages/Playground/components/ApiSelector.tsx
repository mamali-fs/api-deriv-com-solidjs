import { Component, createSignal, For, Show } from 'solid-js';
import v3 from '../data/v3.json';

interface IData {
    name: string
    title: string
}

export const ApiSelector: Component = () => {
    let searchInput: any;
    const data = v3.groups.methods;

    const [openDropDown, setOpenDropDown] = createSignal(false);
    const [selectedItem, setSelectedItem] = createSignal<IData>({ name: '', title: '' });
    const [filterData, setFilterData] = createSignal(data);

    const handleSearch = (e: any) => {
        const searchValue = e.target.value;
        if (searchValue) {
            const newData = [...data].filter(item => { return item.title.toLowerCase().includes(searchValue) });
            setFilterData(newData);
        } else setFilterData(data);
    }

    return (
        <fieldset class="relative">
            <button
                class="w-full h-8 rounded-sm border px-2 text-left flex items-center justify-between border-[#323738]"
                onclick={() => {
                    setOpenDropDown(!openDropDown());
                    setFilterData(data);
                    searchInput.focus();
                }}
            >
                {selectedItem().title || 'Select API Call - Version 3'}
                <Show when={!openDropDown()}><span>▼</span></Show>
            </button>

            <Show when={openDropDown()}>
                <div class="absolute w-full bg-dark-100">
                    <input
                        ref={searchInput}
                        class="w-full p-1 text-dark-100"
                        onInput={handleSearch}
                    />

                    <ul class="list-none overflow-auto mt-2" style={{ "max-height": "60vh" }}>
                        {filterData().length ?
                            <>
                                <li class="p-1 text-[grey]">Select API Call - Version 3</li>
                                <li class="p-1 font-bold">{v3.groups.label}</li>
                            </>
                            :
                            <li class="p-1">No results found</li>
                        }

                        <For each={filterData()}>
                            {(item: IData) => {
                                const isSelected = selectedItem().name == item.name;
                                return (
                                    <li class={`p-1 pl-4 cursor-pointer ${isSelected && "bg-[#ddd] text-dark-100"} hover:bg-[#5897fb]`}
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setOpenDropDown(false);
                                        }}>
                                        {item.title}
                                    </li>
                                )
                            }}
                        </For>
                    </ul>
                </div>
            </Show>
        </fieldset>
    )
}