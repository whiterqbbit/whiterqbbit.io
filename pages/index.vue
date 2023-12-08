<template>
  <div class="flex flex-col gap-12 mx-auto text-lg mt-12 max-w-4xl px-2 sm:px-4 md:px-6">
    <div class="flex justify-evenly place-content-center">
      <div>
        <div class="border-animation rounded-full">
          <div
            class="inline-flex p-1 rounded-full shadow-[0_0_30px_11px] shadow-ctp-blue/25
            transition duration-500 ease-in-out hover:shadow-[0_0_40px_11px] hover:shadow-ctp-teal/30"
          >
            <NuxtImg src="malt_catppuccin.jpg" class="h-64 object-cover rounded-full" />
          </div>
        </div>
      </div>

      <div class="flex flex-col text-center w-1/2 gap-6 justify-round place-content-center">
        <div>
          <div class="text-3xl">
            Hello ! Je suis
            <span class="text-anim-color font-bold text-4xl">Guillaume</span>
          </div>
        </div>
        <p class="text-ctp-subtext1">
          Développeur et designer graphique, spécialisé dans
          la création d'app early-stage
        </p>
      </div>
    </div>

    <div class="flex justify-around">
      <div class="w-1/2">
        Je suis actuellement : <span class="text-anim-color text-2xl italic font-bold pr-1">disponible !</span>
      </div>
      <GlowCard title="Contactez-moi !" class="w-1/2">
        <template #default>
          <ContactForm />
        </template>
      </GlowCard>
    </div>
  </div>
</template>
