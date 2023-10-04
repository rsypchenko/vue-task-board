<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height">
      <v-row>
        <v-col>
          <v-card
            variant="outlined"
            color="indigo"
            v-for="todo in todos"
            :key="todo.id"
          >
            <v-card-title>{{ todo.title }}</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            variant="outlined"
            color="indigo"
            v-for="todo in progress"
            :key="todo.id"
          >
            <v-card-title>{{ todo.title }}</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            variant="outlined"
            color="indigo"
            v-for="todo in review"
            :key="todo.id"
          >
            <v-card-title>{{ todo.title }}</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            variant="outlined"
            color="indigo"
            v-for="todo in done"
            :key="todo.id"
          >
            <v-card-title>{{ todo.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const { todos, progress, review, done } = useAppStore();
</script>
