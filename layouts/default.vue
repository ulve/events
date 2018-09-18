<template>

  <v-app dark>
    <v-content>
      <v-container>
        <v-layout row align-center>  
          <v-flex xs12>
            <Logo />
          </v-flex>
        </v-layout>
      </v-container>   
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
   
    <v-footer :fixed="fixed" app>
      <span>Viktigt testverktyg ™</span>
    </v-footer>
  </v-app>

</template>
