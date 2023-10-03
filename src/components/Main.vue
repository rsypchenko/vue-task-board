<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height">
      <v-row>
        <v-col>
          <v-card v-for="todo in todos" :key="todo.id">
            <v-card-title>{{ todo.title }}</v-card-title>
            <v-card-subtitle>{{ todo.subtitle }}</v-card-subtitle>
            <v-card-text>{{ todo.text }}</v-card-text>
          </v-card>
        </v-col>
        <v-col> </v-col>
        <v-col> </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const { todos } = useAppStore();
</script>
