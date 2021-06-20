<template>
   <nav
    class="flex w-full sticky top-0 items-center bg-white shadow  px-6 h-16 text-gray-700 border-b border-gray-200 z-10"
  >
   
    <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
          <!-- <button
          class="flex items-cente p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button> -->
       
      </div>
    </div>

     <div class="flex items-center">
          <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-24 mr-5" />
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b"
      >
        <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-32 mx-auto" />
      </span>
       <template v-for="link in links" :key="link.title" >

      <span
        @click="onClick(link.route)"
        class="flex items-center  p-4 hover:bg-indigo-500 hover:text-white cursor-pointer "
        >
        <span class="ml-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              :d="link.icon"
            ></path>
          </svg>
        </span>
        <span class="capitalize font-bold pt-1">{{link.title}}</span>
        </span
      >
       </template>

     
      <div class="sticky bottom-0 w-full">
        <button
          class="flex items-center p-4 text-white bg-red-500 hover:bg-red-600 w-full"
        >
         <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-6 w-6 ml-2"
          >
            <path
              :d="logout_icon"
            ></path>
          </svg>
          <span class="text-lg">باہر</span>
         
        </button>
      
      </div>
    </aside>
  </nav>
</template>

<script>
import { Icons } from '../constants'
export default {
  name: "Header",
  data() {
      return {
          isOpen: false,
          links:[
            {title:'ڈیش بورڈ' , icon:Icons.home , route:'/'},
            {title:'والدین', icon:Icons.users},
          {title:'طلباء', icon:Icons.users_group},
          {title:'داخلہ فارم', icon:Icons.paper},
          {title:'اساتذہ', icon:Icons.book_alt},
          {title:'جماعت', icon:Icons.book_open},
          {title:'اخراجات', icon:Icons.credit_card},
          {title:'عطیات', icon:Icons.cash},
          {title:'اساتذہ کی تنخواہ', icon:Icons.credit_card},
          {title:'رپورٹ کارڈ', icon:Icons.calendar},
          {title:'حاضری', icon:Icons.list},


          ],
          logout_icon:Icons.logout
      }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    onClick(r) {
      this.$router.push(r)
      this.isOpen = false
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  }
};
</script>

