<template>
  <div class="singleMsg">
    <header @click="classb = !classb" :class="{redClass: classb}">
      <span class="number">{{ index + 1 }} / {{msgLength}}</span>
      <h4 class="date"> {{ msg.formatedDate }}</h4>
      <h4 class="name">{{ msg.name }}</h4>
      <h4 class="email"><font-awesome-icon :icon="['fas', 'envelope']" /> {{ msg.email }}</h4> 
    </header>
    <article v-if="false">
      <p>{{ msg.message }}</p>
      <span>ID: {{ msg.id }}</span>
    </article>
  </div>
</template>



<script>
export default {
  name: 'SingleMsg',
  props:[
    'msg', 'index', 'msgLength'
  ],
  data() {
    return {
      classb: false
    }
  }
}
</script>




<style scoped>

  .singleMsg {
    width: 50%;
    background: rgba(13, 48, 4, 0.241);
    margin: 1rem auto;
    text-align: left;
    border: 1px solid rgba(23, 90, 6, 0.35);
    overflow-x: auto;
  }

  .singleMsg header{
    position: relative;
    background: rgba(23, 90, 6, 0.35);
    padding: 4px 15px;
  }


  .singleMsg .name {
    margin-right: 2rem;
    color: #fff;
  }

  .singleMsg .email {
    font-weight: 400;
    font-style: italic;
    text-align: center;
  }

  .singleMsg .date {
    margin-right: 2rem;
    color: #b7b7b7;
    font-weight: 200;
    font-size: 0.8rem;
  }

  .singleMsg .number {
    display: none;
  }

  .singleMsg .date,
  .singleMsg .name {
    display: inline-block;
  }

  .singleMsg article {
    padding: 4px 15px;
  }

  .singleMsg article p {
    margin-top: 1rem;
  }

  .singleMsg article span {
    font-size: 0.7rem;
    font-weight: 200;
  }

  .redClass {
    background: red !important;
  }


  /* media queries */


@media (max-width: 800px) {

    .singleMsg {
      width: 100%;
    }
}



</style>