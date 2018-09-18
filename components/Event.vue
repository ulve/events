<template>
  <v-layout>
    <v-flex>
      <v-card :color="color" raised class="white--text">

        <v-container fluid>
          <v-layout>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{ text }}</span>
            </v-flex>
          </v-layout>
        </v-container>

        <v-card-text>
          {{ desc }}
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "fucko" },
    desc: { type: String, default: "fucko" }
  },
  computed: {
    color() {
      const rnd = (seed, min, max) => {
        const x = Math.sin(seed) * 10000;
        const h = x - Math.floor(x); //0..1

        return Math.ceil(min + h * (max - min));
      };

      const hash = s => {
        let hash = 0,
          i,
          chr;
        if (s.length === 0) return hash;
        for (i = 0; i < s.length; i++) {
          chr = s.charCodeAt(i);
          hash = (hash << 5) - hash + chr;
          hash |= 0;
        }
        return hash;
      };

      let seed = hash(this.text);
      const h = rnd(seed++, 0, 360);
      const s = rnd(seed++, 10, 40);
      const l = rnd(seed++, 30, 50);

      return `hsla(${h},${s}%,${l}%,0.9)`;
    }
  }
};
</script>
