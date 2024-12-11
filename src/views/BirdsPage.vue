<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Birds</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h2>Bird Trivia</h2>
      <p>What is the fastest bird?</p>
      <ion-button @click="answer('Cheetah')">Cheetah</ion-button>
      <ion-button @click="answer('Peregrine Falcon')">Peregrine Falcon</ion-button>
      <p>{{ message }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'; 
import {
  IonPage,    // Import IonPage
  IonHeader,  // Import IonHeader
  IonToolbar, // Import IonToolbar
  IonTitle,   // Import IonTitle
  IonContent, // Import IonContent
  IonButton,  // Import IonButton
} from '@ionic/vue';

const message = ref('');
const answer = (choice: string) => {
  message.value = choice === 'Peregrine Falcon' ? 'Correct!' : 'Try again!';
};
</script>
