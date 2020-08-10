<template>
  <div>
    <h1>Edit</h1>
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
