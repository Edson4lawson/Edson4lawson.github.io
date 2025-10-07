<template>
  <section id="projects" class="py-20 bg-[#0a192f] text-text">
    <h2 class="text-4xl font-bold text-center mb-12 text-white">
      Mes <span class="text-cyan-400">Projets</span>
    </h2>

    <Swiper
      :modules="[EffectCoverflow, Pagination, Navigation]"
      effect="coverflow"
      grab-cursor="true"
      centered-slides="true"
      slides-per-view="auto"
      :initial-slide="2"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="{
        clickable: true,
        bulletClass:
          'swiper-pagination-bullet bg-textLight w-2.5 h-2.5 rounded-full opacity-60',
        bulletActiveClass:
          'swiper-pagination-bullet-active bg-primary opacity-100',
      }"
      :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
      class="max-w-5xl mx-auto"
    >
      <SwiperSlide
        v-for="(project, index) in projects"
        :key="index"
        class="bg-card rounded-xl overflow-hidden shadow-lg w-80 transition-transform duration-[600ms] ease-[ease]"
      >
        <!-- Image projet -->
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-85 object-cover"
        />

        <!-- Contenu -->
        <div class="p-4">
          <h3
            class="text-xl font-semibold mb-2 text-primary flex items-center gap-2"
          >
            <Icon :icon="project.icon" class="w-5 h-5" />
            {{ project.title }}
          </h3>

          <p class="text-sm text-textLight mb-4">{{ project.description }}</p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(tag, i) in project.tags"
              :key="i"
              class="bg-accent text- text-xs px-2 py-1 rounded-full flex items-center gap-1"
            >
              <Icon icon="mdi:tag" class="w-3 h-3" />
              {{ tag }}
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="max-w-5xl mx-auto mt-6 flex items-center justify-between px-4">
      <button
        type="button"
        class="custom-prev text-primary bg-card rounded-full p-3 hover:bg-primary hover:text-card shadow"
        aria-label="Précédent"
      >
        <Icon icon="mdi:chevron-left" class="w-5 h-5" />
      </button>
      <button
        type="button"
        class="custom-next text-primary bg-card rounded-full p-3 hover:bg-primary hover:text-card shadow"
        aria-label="Suivant"
      >
        <Icon icon="mdi:chevron-right" class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Icon } from "@iconify/vue"; // Iconify
import AOS from "aos"; // AOS
import "aos/dist/aos.css";

import { onMounted } from "vue";

// Import des images
import project1Image from "./assets/project1.jpg";
import project2Image from "./assets/project2.jpg";
import project3Image from "./assets/project3.jpg";
import project4Image from "./assets/project4.png";
import project5Image from "./assets/project5.jpg";

onMounted(() => {
  AOS.init();
});

const projects = [
  {
    title: "Site Portfolio",
    description: "Un site élégant pour présenter mon travail.",
    image: project1Image,
    tags: ["HTML", "CSS", "JavaScript"],
    code: "#",
    icon: "mdi:web",
  },
  {
    title: "Application E-commerce",
    description:
      "Une application e-commerce moderne avec des fonctionnalités avancées.",
    image: project2Image,
    tags: ["VueJS", "TailwindCSS", "Iconify"],
    code: "#",
    icon: "mdi:cart",
  },
  {
    title: "Plateforme de Blog",
    description: "Une plateforme de blog complète pour les créateurs.",
    image: project3Image,
    tags: ["React", "NodeJS", "MongoDB"],
    code: "#",
    icon: "mdi:blog",
  },
  {
    title: "Application sociale",
    description: "Une application sociale moderne et complète.",
    image: project4Image,
    tags: ["Dart", "Flutter", "Firebase"],
    code: "#",
    icon: "mdi:cart",
  },
  {
    title: "Explorateur de Galaxie",
    description: "Une application immersive d'exploration de galaxies.",
    image: project5Image,
    tags: ["React", "Python", "Angular"],
    code: "#",
    icon: "mdi:blog",
  },
];
</script>
