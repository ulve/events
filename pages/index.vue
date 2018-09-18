<template>

  <v-container grid-list-xl>
    <no-ssr>
      <v-layout row wrap>  
        <v-flex v-for="d in currentWeek" :key="d.date">
          <Day :day="d.name" :date="d.date" />
        </v-flex>
      </v-layout>
    </no-ssr>
  </v-container>

</template>

<script>
import Day from "~/components/Day.vue";
import moment from "moment";

export default {
  components: { Day },
  computed: {
    currentWeek() {
      const mon = moment()
        .startOf("week")
        .add(1, "day");
      const tue = moment()
        .startOf("week")
        .add(2, "day");
      const wen = moment()
        .startOf("week")
        .add(3, "day");
      const thu = moment()
        .startOf("week")
        .add(4, "day");
      const fri = moment()
        .startOf("week")
        .add(5, "day");

      return [
        { name: "Måndag", date: mon.format("YYYY-MM-DD") },
        { name: "Tisdag", date: tue.format("YYYY-MM-DD") },
        { name: "Onsdag", date: wen.format("YYYY-MM-DD") },
        { name: "Torsdag", date: thu.format("YYYY-MM-DD") },
        { name: "Fredag", date: fri.format("YYYY-MM-DD") }
      ];
    }
  },
  mounted() {
    this.$store.dispatch("getEvents");
  }
};
</script>
