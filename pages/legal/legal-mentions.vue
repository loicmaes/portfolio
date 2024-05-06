<script setup lang="ts">
import MentionsSection from "~/components/locals/legalMentions/MentionsSection.vue";
import NavigationLink from "~/components/uikit/buttons/NavigationLink.vue";
import IconArrowRight from "~/components/uikit/icons/arrows/IconArrowRight.vue";

definePageMeta({
  layout: 'empty',
});
useHead({
  title: 'Loïc MAES · Mentions légales',
});
</script>

<template>
  <main data-page class="mentions">
    <h1 class="mentions--title">Mentions légales</h1>

    <hr class="mentions--separator">

    <MentionsSection class="mentions--section" name="site-author">
      <template #title>Éditeur du site</template>
      <template #content>
        <p>
          <b>Nom :</b><br>
          Loïc MAES
        </p>
        <p>
          <b>Adresse :</b><br>
          <NavigationLink to="https://maps.app.goo.gl/iawjah5df4ahm9mQ6" external>
              21, Rue Vincent Scotto<br>
              67400 Illkirch-Graffenstaden
          </NavigationLink>
        </p>
        <p>
          <b>Téléphone :</b><br>
          <NavigationLink to="tel:+33388315386" external>0388 315 386</NavigationLink>
        </p>
        <p>
          <b>Adresse e-mail :</b><br>
          <NavigationLink to="mailto:hello@maesloic.fr">hello@maesloic.fr</NavigationLink>
        </p>
      </template>
    </MentionsSection>
    <MentionsSection class="mentions--section" name="publication-director">
      <template #title>Directeur de publication</template>
      <template #content><p>Loïc MAES.</p></template>
    </MentionsSection>
    <MentionsSection class="mentions--section" name="hosting">
      <template #title>Hébergement</template>
      <template #content>
        <p>
          <b>Nom :</b><br>
          IONOS SARL
        </p>
        <p>
          <b>Adresse :</b><br>
          <NavigationLink to="https://maps.app.goo.gl/FKAihFmh3wQUaroZ7" external>
            7, place de la Gare<br>
            BP 70109<br>
            57200 Sarreguemines Cedex
          </NavigationLink>
        </p>
        <p>
          <b>Téléphone :</b><br>
          <NavigationLink to="tel:+33970808911" external>0970 808 911</NavigationLink>
        </p>
        <p>
          <b>Adresse e-mail :</b><br>
          <NavigationLink to="mailto:info@ionos.fr" external>info@ionos.fr</NavigationLink>
        </p>
      </template>
    </MentionsSection>
    <MentionsSection class="mentions--section" name="intellectual-property">
      <template #title>Propriété intellectuelle</template>
      <template #content><p>L'ensemble des contenus (textes, images, vidéos, etc.) présents sur le site <NavigationLink to="/">maesloic.fr</NavigationLink> est protégé par les dispositions du Code de la propriété intellectuelle et des traités et accords internationaux relatifs à la propriété intellectuelle. Toute reproduction ou représentation totale ou partielle de ce site ou de son contenu, par quelque procédé que ce soit, sans autorisation préalable expresse de Loïc MAES, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p></template>
    </MentionsSection>
    <MentionsSection class="mentions--section" name="personnal-data">
      <template #title>Données personnelles</template>
      <template #content><p>Les données personnelles collectées sur ce site sont destinées à Loïc MAES et ne seront utilisées que dans le cadre de la relation commerciale établie avec les utilisateurs du site. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ces droits en me contactant à l'adresse <NavigationLink to="mailto:hello@maesloic.fr" external>hello@maesloic.fr</NavigationLink>.</p></template>
    </MentionsSection>
    <MentionsSection class="mentions--section" name="activity">
      <template #title>Activité</template>
      <template #content><p>Je suis un entrepreneur indépendant exerçant une profession libérale de prestation de services en design graphique, développement web et photographie. Mon activité consiste à fournir des services personnalisés dans ces domaines, en travaillant en étroite collaboration avec mes clients pour répondre à leurs besoins spécifiques en matière de création visuelle, de développement technique et de production photographique. Je m'engage à fournir des solutions créatives, efficaces et de haute qualité à mes clients, en respectant les normes professionnelles et éthiques de mon secteur d'activité.</p></template>
    </MentionsSection>
    <MentionsSection class="mentions--section" name="siret">
      <template #title>Numéro de SIRET</template>
      <template #content>91063718000019</template>
    </MentionsSection>
    <MentionsSection class="mentions--section" name="tribunal">
      <template #title>Tribunal compétent</template>
      <template #content>En cas de litige éventuel, et après tentative de recherche d'une solution amiable, compétence est attribuée aux tribunaux français.</template>
    </MentionsSection>

    <NavigationLink to="/" class="mentions--back">Retour à l'accueil <IconArrowRight /></NavigationLink>
  </main>
</template>

<style scoped lang="sass">
.mentions
  @apply px-8 py-20 flex flex-col items-center gap-12

  &--separator
    @apply block w-full max-w-[768px] mx-8 lg:mx-12 border-[1px] border-woodsmoke-200 dark:border-woodsmoke-800

  &--title
    @apply text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black

  &--section
    @apply mb-2 lg:mb-10

  &--back
    @apply flex justify-between gap-4
</style>
