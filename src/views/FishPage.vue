<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Fish</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h2>Fish Fact of the Day</h2>
      <ion-button @click="generateFact">Get a Fact</ion-button>
      <p>{{ fact }}</p>
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

const facts = [
  'Goldfish have a memory span of 3 months.',
  'Some fish can fly!',
  'Sharks have been around longer than dinosaurs.',
];
const fact = ref('');
const generateFact = () => {
  fact.value = facts[Math.floor(Math.random() * facts.length)];
};
</script>
