<template>
  <div class="flex flex-col gap-12 mx-auto mt-12 px-2 sm:px-4 md:px-6">
    <div class="flex justify-around place-content-center">
      <div class="border-animation rounded-full">
        <div
          class="inline-flex p-1 rounded-full shadow-[0_0_30px_11px] shadow-ctp-blue/25
            transition duration-500 ease-in-out hover:shadow-[0_0_40px_11px] hover:shadow-ctp-teal/30"
        >
          <NuxtImg src="malt_catppuccin.jpg" class="h-64 object-cover rounded-full" />
        </div>
      </div>

      <div class="flex flex-col w-1/2 gap-8 justify-round place-content-center">
        <div>
          <div class="text-4xl text-center text-anim-color">
            Jean-Guillaume Bonnefoy
          </div>
          <div class="text-3xl text-center text-ctp-subtext0">
            Docteur ès merguez
          </div>
        </div>
        <div>
          Aujourd'hui comme demain, je suis à votre disposition pour vous aider à réaliser tous
          vos projets barbecue.
        </div>
      </div>
    </div>

    <div class="flex gap-12">
      <GlowCard title="Ingénieur-commercial en merguez">
        <template #default>
          Mon grand kiff dans la vie, c’est les merguez. Merguez pois-chiche, merguez camembert,
          ou encore merguez sardines, aucune ne me résiste.
          Je suis expert mondialement reconnu en merguez, invité d’honneur de la MerguezCon de Toulon,
          mais je suis également chercheur en saucisse toulousaine sur mon temps libre.
          Je m’intéresse actuellement à la saucisse de Francfort.
        </template>
      </GlowCard>
      <GlowCard title="Formation">
        <template #default>
          Après avoir obtenu mon bac spécialité Merguez avec mention Bien Cuite, j’ai intégré
          l’ENSM (École Nationale Supérieure de la Merguez) et ai été promu major de ma promotion.
          J’ai ensuite obtenu un doctorat en merguezologie à l’Université de Trifouillis-sur-Mer,
          où j’ai pu écrire une thèse sur l'impact de la merguez sur la santé mentale du Tiers-Etat
          au XVIIIe siècle.
        </template>
      </GlowCard>
      <GlowCard title="Passion Merguez">
        <template #default>
          Ma vocation m'a été transmise par mon père, qui est lui-même issu d'une longue lignée de
          merguezologues, dont le premier représentant est le célèbre Jean-Baptiste Merguez. C'est
          donc tout petit que j'ai commencé à m'intéresser à la merguez, et j'ai naturellement pu
          développer une expertise qui m’a conduit à inventer des recettes innovantes, telles que
          la merguez à la truffe et la merguez au vinaigre balsamique. J'ai également inventé le
          tacos merguez, qui a connu un succès fulgurant dans le monde entier.
        </template>
      </GlowCard>
    </div>
  </div>
</template>
