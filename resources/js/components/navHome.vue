<template>
      <header class="glass-effect p-4 sticky top-0 z-50 backdrop-blur-md bg-black/30">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-2 space-x-reverse">
            <svg class="h-8 w-8 text-[#6d65c7]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            <h1 class="text-2xl font-bold">منصة الشهادات</h1>
          </div>
          <div class="flex space-x-4 space-x-reverse">
            <router-link to="/login"
              class="h-10 px-4 py-2 text-white hover:bg-white/20 rounded-md transition">تسجيل الدخول</router-link>
            <router-link to="/register"
              class="h-10 px-4 py-2 bg-[#6d65c7] hover:bg-[#5a52ad] text-white rounded-md transition">إنشاء حساب</router-link>
          </div>
        </div>
      </header>
  


</template>