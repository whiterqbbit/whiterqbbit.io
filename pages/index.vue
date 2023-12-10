<template>
  <div class="flex flex-col gap-12 mx-auto text-lg mt-12 max-w-4xl px-2 sm:px-4 md:px-6">
    <div class="flex justify-evenly place-content-center">
      <div>
        <div class="border-animation rounded-full">
          <div class="inline-flex p-1 rounded-full glow-anim">
            <NuxtImg src="malt_catppuccin.jpg" class="h-64 object-cover rounded-full" />
          </div>
        </div>
      </div>

      <div class="flex flex-col text-center w-1/2 gap-4 justify-round place-content-center">
        <div>
          <div class="text-3xl">
            Hello ! Je suis
            <span class="text-anim-color font-bold text-4xl">Guillaume</span>
          </div>
        </div>
        <p class="text-ctp-subtext1">
          Développeur fullstack et designer graphique,
          spécialisé dans la création d'app early-stage
        </p>
      </div>
    </div>

    <div class="flex gap-8">
      <div class="w-1/2 place-self-center">
        Je suis actuellement : <span class="text-anim-color text-2xl italic font-bold pr-1">disponible !</span><br><br>
        J'aime travailler sur des projets <strong>ambitieux</strong> et <strong>challengeants</strong>!<br>
        Si votre vision est claire, je peux vous fournir le design et le développement de votre app en un
        <strong>temps record</strong> !
        <!-- Mon TJM est de <span class="text-anim-color font-bold pr-1">400€</span><br> -->
      </div>
      <GlowCard title="Contactez-moi !" class="w-1/2">
        <template #default>
          <ContactForm />
        </template>
      </GlowCard>
    </div>
    <div class="flex gap-8">
      <GlowCard title="Ma stack" class="place-self-center w-1/2">
        <template #default>
          <TechStack />
        </template>
      </GlowCard>
      <div class="w-1/2 place-self-center">
        Techniquement, j'ai un faible pour l'écosystème <strong>Vue/Nuxt</strong>, qui allie rapidité et scalabilité, ainsi que <strong>Typescript</strong>.<br>
        Je privilégie les techniques <strong>modernes</strong>, mais <strong>matures</strong>. Évidemment, tout est fonction du projet !
      </div>
    </div>
    <div class="flex gap-8">
      <div class="w-1/2 place-self-center">
        Si votre projet le nécessite, je peux également solliciter mes amis au travers de notre collectif de freelance
        <span class="text-anim-color text-2xl italic font-bold pr-1">Vite!</span>.<br>
        C'est particulièrement pertinent pour les projets crypto/web3/IA, ou simplement si vous voulez avancer encore plus vite.
      </div>
      <NuxtImg src="https://media1.tenor.com/m/w61O0eYj-M4AAAAC/frens.gif" class="h-64 object-cover rounded-3xl" />
    </div>
    <GlowCard title="Contactez-moi !" class="my-16 m-auto w-1/2 !shadow-[0_0_80px_13px] !shadow-ctp-blue/30">
      <template #default>
        <ContactForm />
      </template>
    </GlowCard>
  </div>
</template>
