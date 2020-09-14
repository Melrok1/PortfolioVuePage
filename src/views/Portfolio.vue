<template>
  <div class="portfolio">
    <h1>Portfolio page</h1>

    <div class="container" v-for="(skill, index) in skills" :key="index">
      <div>{{ skill.name + " " + percent }} %</div>
      <div class="loadingBar">
        <div class="percentage" :style="{'width': percentage + '%', 'backgroundColor': skill.color}"></div>
      </div>
    </div>


    <!-- <div class="container">
      <div>{{ percent }} %</div>
      <div class="loadingBar">
        <div class="percentage" :style="{'width': percentage + '%'}"></div>
      </div>
    </div> -->

  </div>
</template>


<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      percentage: 0,
      skills: [
        {name: 'HTML', maxPercent: 85, color: 'orange'},
        {name: 'JS', maxPercent: 52, color: 'yellow'},
        {name: 'CSS', maxPercent: 90, color: 'blue'}
      ]
    }
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    }
  },
  created() {
    let interval = setInterval(() => {
      if(this.percentage < 100) {
        this.percentage += 0.1
      }else {
        clearInterval(interval)
      }
    },2)
  }
}
</script>












<style scoped>

  .portfolio {
    min-height: calc(100vh - 83px);
    background: #2b2b2b;
    color: #b7b7b7;
    padding: 2rem 1rem;
    overflow-x: hidden;
  }

  /* Progress bar */
  .container {
    text-align: right;
    font-size: 1.1rem;
    font-weight: 800;
    width: 50%;
    margin: 1.7rem auto;
  }

  .loadingBar {
    position: relative;
    width: 400px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    border-bottom: 1px solid #353535;
    box-shadow: inset 0px 1px 2px rgba(0,0,0,0.4), 
                      0px -1px 1px #2b2b2b, 
                      0px 1px 0px #3e3e3e;
  }

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    height: 100%;
    /* width: 50%; */
    border-radius: 15px;
    /* background: green; */
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, 
      rgba(255,255,255,0.06) 25%, transparent 25%, 
      transparent 50%, rgba(255,255,255,0.06) 50%,
      rgba(255,255,255,0.06) 75%, transparent 75%,
      transparent);
    animation: animate-stripes 3s linear infinite;  
  }

  @keyframes animate-stripes {
    0% {background-position: 0px 0px;}
    100% {background-position: 60px 0px;}
  }

</style>
