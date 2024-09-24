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
        <img v-if="menu.useImage" :src="menu.icon" alt="" class="object-cover w-4 h-4">
        <svg v-else-if="menu.icon" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                :d="menu.icon"
                class="stroke-[#FECF7D] group-hover:stroke-white" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        {{ menu.name }}
        <button v-if="menu.children">
            <fa-icon icon="fa-solid fa-chevron-down" />
        </button>

        <slot></slot>
    </a>
</template>