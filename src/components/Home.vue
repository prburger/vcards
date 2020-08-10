<template>
  <b-container>
    <h1>Word Bank</h1>
    <b-table
      striped
      hover
      :fields="fields"
      :items="wordlist"
      :per-page="perPage"
      :currentPage="currentPage"
    >
      <template v-slot:cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
      <template v-slot:cell(actions)="row">
        <b-link>
          <b-icon
            icon="b-icon-pencil"
            size="sm"
            color="teal"
            class="mr-1"
            @click="edit(row.item)"
          >
          </b-icon>
        </b-link>
        <b-link>
          <b-icon
            icon="b-icon-trash"
            size="sm"
            color="teal"
            @click="remove(row.item)"
          >
          </b-icon>
        </b-link>
      </template>
      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      pills
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      style="color:teal;"
    ></b-pagination>
  </b-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      currentPage: 1,
      perPage: 7,
      rows: 400,
      wordlist: [],
      fields: [
        { key: "Id", label: "Id", sortable: true, sortDirection: "desc" },
        { key: "Word", label: "Word", sortable: true, sortDirection: "desc" },
        {
          key: "Simplified",
          label: "Simplified",
          sortable: true,
          class: "text-center"
        },
        {
          key: "Pinyin",
          label: "Pinyin",
          sortable: true,
          class: "text-center"
        },
        {
          key: "English",
          label: "English",
          sortable: true,
          class: "text-center"
        },
        { key: "actions", label: "Actions" }
      ]
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await fetch("wordbank.json");
      const vals = await res.json();
      this.wordlist = vals;
    },
    paginate(currentPage) {
      alert(currentPage);
    },
    remove(item) {
      alert("Delete" + item.Id);
    },
    edit(item) {
      alert("Edit " + item.Id);
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 12pt;
  font-family: Calibri;
  font-weight: bold;
  text-align: center;
  color: teal;
}

table {
  font-size: 10pt;
  font-family: Calibri;
  width: 95%;
}
tr {
  margin: 0px;
  padding: 0px;
}
td {
  font-size: 12pt;
  font-family: Calibri;
  text-align: left;
}
th {
  font-size: 11pt;
  font-family: Calibri;
  font-weight: bold;
  text-align: left;
}
</style>
