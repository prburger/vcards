<template>
  <div>
    <h1>Insert</h1>
    <form>
      <div class="row mb-2">
        <div class="col-lg-2">
          <label class="col-form-label col-form-label-lg">English</label>
        </div>
        <div class="col-lg-10">
          <input
            type="text"
            v-model.trim="english"
            class="form-control form-control-lg"
          />
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-lg-2">
          <label class="col-form-label col-form-label-lg">Pinyin</label>
        </div>
        <div class="col-lg-10">
          <input
            type="text"
            v-model.trim="pinyin"
            class="form-control form-control-lg"
          />
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-lg-2">
          <label class="col-form-label col-form-label-lg">Simplified</label>
        </div>
        <div class="col-lg-10">
          <input
            type="text"
            v-model.trim="simplified"
            class="form-control form-control-lg"
          />
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-lg-2">
          <label class="col-form-label col-form-label-lg">Word</label>
        </div>
        <div class="col-lg-10">
          <input
            type="text"
            v-model.trim="word"
            class="form-control form-control-lg"
          />
        </div>
      </div>
      <div style="text-align: center;">
        <a
          href="#"
          class="submit btn btn-outline-primary col-6"
          v-on:click="submit"
          >Save</a
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["wordlist"],
  methods: {
    submit: function() {
      alert(this.english);
    }
  }
};
</script>

<style lang="scss" scoped>
.submit {
  color: black;
  font-weight: bold;
  border: 1px black solid;
  box-shadow: 1px 1px teal;
}

h1 {
  font-size: 14pt;
  font-weight: bold;
  width: 600px;
  margin-left: 400px;
}

form {
  text-align: left;
  border: 1px black solid;
  margin-top: 20px;
  width: 600px;
  margin-left: 400px;
  padding: 20px;
}
</style>
