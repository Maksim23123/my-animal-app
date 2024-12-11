<template>
  <ion-app>
    <ion-tabs>
      <!-- Router Outlet for Tab Views -->
      <ion-router-outlet></ion-router-outlet>

      <!-- Tab Bar -->
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="cats" href="/cats">
          <ion-icon name="paw-outline"></ion-icon>
          <ion-label>Cats</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="dogs" href="/dogs">
          <ion-icon name="paw-outline"></ion-icon>
          <ion-label>Dogs</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="birds" href="/birds">
          <ion-icon name="egg-outline"></ion-icon>
          <ion-label>Birds</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="fish" href="/fish">
          <ion-icon name="fish-outline"></ion-icon>
          <ion-label>Fish</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/vue';
</script>
