<script setup lang="ts">
defineProps({
    menu: {
        type: Object,
        required: true
    },
    type: String,
    iconSize: String
})
</script>

<template>
    <a :href="menu.link" class="flex items-center gap-[7px]  transition-colors duration-200"
        :class="type === 'primary' ? 'text-primary group-hover:text-white' : type === 'footer' ? 'text-[#DDDDDD] hover:text-primary' : 'px-4 py-2 text-black hover:bg-slate-200'">

        <div class="w-[17px] h-[17px] flex items-center justify-center">
            <img v-if="menu.useImage" :src="menu.icon" alt="" class="object-cover w-full h-full">
            <svg v-if="menu.icon" class="w-full h-full" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path :d="menu.icon" :class="type === 'primary' ? 'stroke-[#FECF7D] group-hover:stroke-white' : 'stroke-black'" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
        {{ menu.name }}
        <button v-if="menu.children">
            <fa-icon icon="fa-solid fa-chevron-down" />
        </button>

        <slot></slot>
    </a>
</template>