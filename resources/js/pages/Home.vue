<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <!-- 🔹 الهيدر -->
    <nav-home />
      <!-- 🔹 هيرو -->
      <section class="py-20 px-4 text-center fade-up">
        <div class="container mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            شهادات <span class="text-[#6d65c7]">آمنة</span> وموثوقة
          </h1>
          <p class="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            منصة متطورة لإصدار والتحقق من صحة الشهادات التدريبية بتقنية البصمة الرقمية ورمز QR
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/register"
              class="h-11 px-8 py-4 text-lg bg-[#6d65c7] hover:bg-[#5a52ad] text-white rounded-md transition shadow-lg">
              ابدأ الآن مجاناً
            </router-link>
            <router-link to="/verify"
              class="h-11 px-8 py-4 text-lg border border-white text-white hover:bg-white hover:text-gray-900 rounded-md transition">
              تحقق من شهادة
            </router-link>
          </div>
        </div>
      </section>
  
      <!-- 🔹 المميزات -->
      <section class="py-20 px-4">
        <div class="container mx-auto">
          <div class="text-center mb-16 fade-up">
            <h2 class="text-4xl font-bold mb-4">لماذا تختار منصتنا؟</h2>
            <p class="text-xl text-white/70">حلول متقدمة لضمان أمان وموثوقية شهاداتك</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(f, i) in features" :key="i"
              class="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-transform fade-up"
              :style="{ animationDelay: (i * 0.2) + 's' }">
              <div class="h-12 w-12 mx-auto mb-4 text-[#6d65c7]">
                <component :is="f.icon" />
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ f.title }}</h3>
              <p class="text-white/70">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 🔹 الإحصائيات -->
      <section class="py-20 px-4 bg-black/20">
        <div class="container mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div v-for="(s, i) in stats" :key="i" class="fade-up" :style="{ animationDelay: (i * 0.2) + 's' }">
            <div class="text-4xl font-bold text-[#6d65c7] mb-2">{{ s.number }}</div>
            <div class="text-white/70">{{ s.label }}</div>
          </div>
        </div>
      </section>
  
      <!-- 🔹 كيف يعمل -->
      <section class="py-20 px-4">
        <div class="container mx-auto">
          <div class="text-center mb-16 fade-up">
            <h2 class="text-4xl font-bold mb-4">كيف يعمل النظام؟</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(s, i) in steps" :key="i"
              class="glass-effect p-8 rounded-2xl text-center fade-up"
              :style="{ animationDelay: (i * 0.2) + 's' }">
              <div class="bg-[#6d65c7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold">{{ i + 1 }}</span>
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ s.title }}</h3>
              <p class="text-white/70">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 🔹 CTA -->
      <section class="py-20 px-4 bg-gradient-to-r from-[#6d65c7] to-purple-600 text-center fade-up">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-6">جاهز لتبدأ؟</h2>
          <p class="text-xl text-white/90 mb-8">انضم إلى آلاف المدربين الذين يثقون بمنصتنا</p>
          <router-link to="/register"
            class="h-11 px-8 py-4 text-lg bg-white text-[#6d65c7] hover:bg-gray-100 rounded-md transition shadow-lg">
            ابدأ رحلتك الآن
          </router-link>
        </div>
      </section>
  
      <!-- 🔹 الفوتر -->
      <footer-home />
    </div>
  </template>
  
  <script setup>
  const features = [
    { title: 'أمان عالي', desc: 'حماية متقدمة ضد التزوير والتلاعب', icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>' } },
    { title: 'رمز QR', desc: 'تحقق فوري من صحة الشهادة', icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/></svg>' } },
    { title: 'شهادات معتمدة', desc: 'شهادات موثقة ومعترف بها', icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>' } },
    { title: 'إدارة سهلة', desc: 'واجهة بسيطة لإدارة الطلاب والدورات', icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>' } },
  ]
  
  const stats = [
    { number: '10,000+', label: 'شهادة مُصدرة' },
    { number: '500+', label: 'مدرب معتمد' },
    { number: '50+', label: 'مؤسسة تدريبية' },
    { number: '99.9%', label: 'معدل الأمان' },
  ]
  
  const steps = [
    { title: 'التسجيل والاعتماد', desc: 'قدم بياناتك كمدرب واحصل على الاعتماد من المنصة' },
    { title: 'إضافة الطلاب', desc: 'أضف بيانات الطلاب وتفاصيل الدورات التدريبية' },
    { title: 'إصدار الشهادات', desc: 'اصدر شهادات آمنة مع رمز QR وتوقيع رقمي' },
  ]
  </script>
  
  <style>
  /* fade-up animation */
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.8s ease forwards;
  }
  .fade-up:nth-child(odd) {
    animation-delay: 0.3s;
  }
  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  </style>
  