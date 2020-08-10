<template>
  <div>
    <h1>Word Bank</h1>
    <table class="table table-striped">
      <caption></caption>
      <colgroup>
        <col style="width:5%" />
        <col style="width:25%" />
        <col style="width:25%" />
        <col style="width:25%" />
        <col style="width:25%" />
      </colgroup>
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            English
          </th>
          <th>
            Simplified
          </th>
          <th>
            Pinyin
          </th>
          <th>
            Word
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in wordlist" :key="item.id">
          <td style="column-width:1;">
            {{ item.Id }}
          </td>
          <td>
            {{ item.English }}
          </td>
          <td>
            {{ item.Simplified }}
          </td>
          <td>
            {{ item.Pinyin }}
          </td>
          <td>
            {{ item.Word }}
          </td>
          <td>
            <router-link :to="{ name: '/edit', params: { item: item } }">
              <font-awesome-icon
                icon="edit"
                style="color:black; font-size:11pt;"
              ></font-awesome-icon>
            </router-link>
            &nbsp;
            <router-link :to="{ name: '/delete', params: { item: item } }">
              <font-awesome-icon
                icon="trash"
                style="color:black; font-size:11pt;"
              ></font-awesome-icon>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      currentPage: 1,
      rows: 3,
      perPage: 10,
      wordlist: []
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
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 14pt;
  font-family: Calibri;
  font-weight: bold;
  text-align: center;
}

table {
  font-size: 11pt;
  font-family: Calibri;
  padding: 20px;
  margin: 30px;
  width: 95%;
}
td {
  font-size: 11pt;
  font-family: Calibri;
}
th {
  font-size: 11pt;
  font-family: Calibri;
  font-weight: bold;
}
</style>
