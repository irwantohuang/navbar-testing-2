<script setup lang="ts">
import Logo from '../../public/logo.png'
import { menus, profileMenus } from '../data/menus.ts';
import { onBeforeMount, onMounted, ref } from 'vue';
import MenuItem from './elements/MenuItem.vue';

const discoverDropdown = ref<number | null>(null);
const profileDropdown = ref<boolean>(false);
const showTransformedNav = ref<boolean>(false);

const toggleDiscoverDropdown = (menuId: number) => {
    discoverDropdown.value = discoverDropdown.value === menuId ? null : menuId;
    profileDropdown.value = false
}

const toggleProfileDropwdown = () => {
    profileDropdown.value = !profileDropdown.value;
    discoverDropdown.value = null;
}

const closeDropdown = () => {
    discoverDropdown.value = null
    profileDropdown.value = false
}

const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        closeDropdown();
    }
}

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const headerHeight = 90;

    showTransformedNav.value = scrollPosition > headerHeight;
}

onMounted(() => {
    document.addEventListener("keydown", handleKeyDown)
    window.addEventListener('scroll', handleScroll)
})
onBeforeMount(() => {
    document.removeEventListener("keydown", handleKeyDown)
    window.removeEventListener("scroll", handleScroll)
})


</script>

<template>
    <header class="sticky top-0 h-[90px] w-full z-30 bg-black text-white">
        <div class="relative container mx-auto flex items-center h-full justify-between">

            <div @click.prevent="closeDropdown" v-if="profileDropdown || discoverDropdown !== null" class="fixed inset-0 w-ful h-full"></div>

            <!-- Logo -->
            <div class="flex items-center w-full h-full gap-12">
                <a href="/" class="min-w-[76px] min-h-[76px] max-h-[76px] max-w-[76px] overflow-hidden flex items-center justify-center">
                    <img :src="Logo" alt="" class="object-cover">
                </a>
                
                <div v-if="showTransformedNav" class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <fa-icon icon="fa-solid fa-magnifying-glass" class="text-[#ACACAC]" />
                    </div>
                    <input 
                        type="search"
                        class="block w-[319px] py-2.5 ps-12 pe-4 bg-[#494949] rounded-3xl text-[#ACACAC] text-base font-normal focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Search destinations or activities"
                    />
                </div>
            </div>

            <!-- Navbar -->
            <nav class="flex items-center gap-8">
                <ul class="flex items-center space-x-[36px]">
                    <li v-for="menu in menus" :key="menu.id" class="group relative">
                        <MenuItem :menu="menu" type="primary"
                            @click.prevent="menu.children ? toggleDiscoverDropdown(menu.id) : null" />

                        <div v-if="discoverDropdown === menu.id"
                            class="absolute right-0 mt-4 py-3 w-[249px] bg-primary-white rounded-md shadow-lg z-10">
                            <ul class="py-2">
                                <li v-for="child in menu.children" :key="child.id">
                                    <MenuItem :menu="child" iconSize="w-[17px] h-[17px]" />
                                </li>
                            </ul>
                        </div>
                    </li>


                    <!-- Profile -->
                    <li class="ms-4 relative">
                        <button
                            class="flex items-center gap-2 justify-center rounded-3xl w-24 h-12 bg-primary-white text-black"
                            @click.prevent="toggleProfileDropwdown">
                            <fa-icon icon="fa-solid fa-bars" class="w-4 h-4" />
                            <fa-icon icon="fa-solid fa-circle-user" class="w-8 h-8" />
                        </button>
                        <div v-if="profileDropdown"
                            class="absolute right-0 mt-1 py-3 w-[249px] bg-primary-white rounded-md shadow-lg z-10">
                            <ul class="py-2">
                                <li v-for="menu in profileMenus" :key="menu.id">
                                    <MenuItem :menu="menu" iconSize="w-[17px] h-[17px]" />

                                    <div v-if="menu.id === 2" class="border-[#DDDDDD] border-t-2 my-4" />
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>