<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dogs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h2>Lovely Dogs</h2>
      <img src="https://placedog.net/300/200" alt="Cute Dog" style="width: 100%; max-width: 300px; border-radius: 10px;"/>
      <p></p>
      <ion-button @click="like">Like 🐶</ion-button>
      <p>Total Likes: {{ likes }}</p>
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

const likes = ref(0);  // Reactive variable to store the number of likes
const like = () => likes.value++;  // Increment the likes count when the button is clicked
</script>
