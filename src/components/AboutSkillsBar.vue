<template>
  <div class="skillBar">
    <section class="mainSkillSection">
      <div class="container" v-for="(skill, index) in skills" :key="index">
        <div class="iconWrap" :style="{'color': skill.color}">
          <font-awesome-icon :icon="['fab', skill.icon]" /> 
        </div>
        <div class="skillName">{{ skill.name}}</div>
        <div class="skillPercent">{{ CompInterval(skill.maxPercent) }}%</div>
        <div class="loadingBar">
          <div class="percentage" :style="{'width': skill.maxPercent + '%', 'backgroundColor': 'green'}"></div>
        </div>
      </div>
    </section>
  </div>
</template>




<script>
export default {
  name: 'SkillBar',
  data() {
    return {
      percentage: 0,
      skills: [
        {name: 'HTML', maxPercent: 90, color: '#e44d26', icon: 'html5'},
        {name: 'CSS', maxPercent: 85, color: '#1572b6', icon: 'css3-alt'},
        {name: 'JS', maxPercent: 52, color: '#ffca28', icon: 'js'},
        {name: 'Vue.js', maxPercent: 50, color: '#41b883', icon: 'vuejs'},
        {name: 'Node.js', maxPercent: 42, color: '#8cc84b', icon: 'node-js'},
        {name: 'Git', maxPercent: 41, color: '#777777', icon: 'github'},
      ]
    }
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    },
  },
  methods: {        
    CompInterval(data) {
      if(this.percent < data) {
        return this.percent
      }else {
        return data
      } 
    }
  },
  created() {
    let interval = setInterval(() => {
      if(this.percentage < 100) {
        this.percentage += 0.3
      }else {
        clearInterval(interval)
      }
    },1)
  }
}
</script>




<style scoped>
  .mainSkillSection {
    width: 300px;
    margin: 2rem auto;
    padding: 1rem;
    background: rgba(5, 41, 12, 0.357);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0px;

    text-align: right;
    font-size: 1.1rem;
    font-weight: 800;
    width: 100%;
    /* margin: 1.7rem auto; */
  }

  .iconWrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* padding-left: 10px; */
    width: 53px;
    font-size: 1.8rem;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .skillName {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: start;
    padding: 0 0 0 10px;
  }

  .skillPercent {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    justify-self: end;
  }

  .loadingBar {
    grid-column: 2 / 6;
    grid-row: 2 / 3;
    margin: 0 auto;
    position: relative;
    width: 95%;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    border-bottom: 1px solid #353535;
    box-shadow: inset 0px 1px 2px rgba(0,0,0,0.4), 
                0px -1px 1px #353535, 
                0px 1px 0px #585858;
  }

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    height: 90%;
    /* width: 50%; */
    border-radius: 5px;
    /* background: green; */
    background-size: 10px 10px;
    background-image: linear-gradient(135deg, 
      rgba(255,255,255,0.15) 25%, transparent 25%, 
      transparent 50%, rgba(255,255,255,0.15) 50%,
      rgba(255,255,255,0.15) 75%, transparent 75%,
      transparent);
    animation: animate-stripes 5s linear infinite, fill-stripes 1s linear;  
  }

  @keyframes animate-stripes {
    0% {background-position: 0px 0px;}
    100% {background-position: 60px 0px;}
  }

  @keyframes fill-stripes {
    0% {
      width: 0px;
    }
  }
</style>