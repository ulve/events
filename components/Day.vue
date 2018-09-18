<template>
  <v-layout>
    <v-flex>
      <v-card :color="color" raised class="white--text">
        
        <v-img :src="bg" height="200px">
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 mb-0 pb-0>
                <span class="headline" style="text-shadow: 2px 2px #220022">{{ day }}</span>
              </v-flex>
              <v-flex xs12 mt-0 pt-0>
                <span class="subheading" style="text-shadow: 2px 2px #222200">{{ date }}</span>                
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-card-text>
          <Event v-for="e in events" :text="e.headline" :desc="e.desc" :key="e.event" />
          
          <v-img v-if="events.length === 0" :src="getCat">
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 mb-0 pb-0>
                  <span class="headline" style="text-shadow: 2px 2px #222222">Inget att göra!</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import t from "~/services/trianglify.js";
import Event from "~/components/Event.vue";
import moment from "moment";

export default {
  components: { Event },
  props: {
    day: { type: String, default: "fucko" },
    date: { type: String, default: "fucko" }
  },
  computed: {
    bg() {
      return t(this.day + this.date);
    },
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

      let seed = hash(this.day);
      const h = rnd(seed++, 0, 360);
      const s = rnd(seed++, 10, 40);
      const l = rnd(seed++, 30, 50);

      return `hsla(${h},${s}%,${l}%,0.9)`;
    },
    events() {
      return this.$store.getters.events.filter(e =>
        moment(e.date).isSame(moment(this.date, "YYYY-MM-DD"), "day")
      );
    },
    getCat() {
      return (
        "https://api.thecatapi.com/v1/images/search?format=src&api_key=a676a7aa-34ce-49b3-9ab7-9399406a5b0d" +
        new Date().getTime()
      );
    }
  }
};
</script>
