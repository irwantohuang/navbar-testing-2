<script setup lang="ts">
import { footerMenus, socialMedias } from '../data/menus.ts';
import AppStore from '../../public/app-store2.png'
import PlayStore from '../../public/play-store2.png'
import MenuItem from './elements/MenuItem.vue';
</script>

<template>
    <footer class="bg-black text-white">
        <div class="container mx-auto py-12">
            <div class="flex items-start justify-between">
                <div class="flex w-[594px] items-start justify-between">
                    <div v-for="menu in footerMenus">
                        <h1>{{ menu.title }}</h1>

                        <div class="flex flex-col gap-3 mt-8">
                            <template v-if="menu.children" v-for="child in menu.children" :key="menu.id">
                                <MenuItem :menu="child" iconSize="w-[17px] h-[17px]" type="footer" />          
                        </template>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2 max">
                    <h1>Download the App</h1>

                    <div class="w-44 overflow-hidden">
                        <img :src="AppStore" alt="Play Store" class="object-cover transition-[border] duration-100 w-full h-full hover:border-2 hover:border-primary rounded-md">
                    </div>
                    <div class="w-44 overflow-hidden">
                        <img :src="PlayStore" alt="Play Store" class="object-cover transition-[border] duration-100 w-full h-full hover:border-2 hover:border-primary rounded-md">
                    </div>
                </div>
            </div>

            <div class="border-t w-full border-t-[#DDDDDD] my-8"></div>

            <div class="flex items-center justify-between">
                <h1 class="text-[#DDDDDD]">&copy; 2024 Zomor All rights reserved.</h1>


                <div class="flex items-center gap-2">
                    <a v-for="menu in socialMedias" :key="menu.id" :href="menu.link">
                        <fa-icon :icon="menu.icon" class="text-white hover:text-primary transition-colors duration-200"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>