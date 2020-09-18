<template>
  <div class="menuBtn">
    <div class="menu-btn" @click="menuBtnAnim = !menuBtnAnim"> 
      <div class="menu-btn__burger" :class="{animationClass : menuBtnAnim}">

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MenuBtn',
  data() {
    return {
      menuBtnAnim: false
    }
  }
}
</script>


<style scoped>
  .menuBtn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border: 1px solid #20b01e;
  }

  .menu-btn .menu-btn__burger {
    position: relative;
    width: 36px;
    height: 4px;
    background: #20b01e;
    /* border-radius: 5px; */
    /* box-shadow: 0px 2px 5px rgba(255,101,47,0.2); */
    transition: all 0.5s ease-in-out; 
  }

  .menu-btn .menu-btn__burger::after,
  .menu-btn .menu-btn__burger::before {
    content: '';
    position: absolute;
    width: 36px;
    height: 4px;
    background: #20b01e;
    /* border-radius: 5px; */
    /* box-shadow: 0px 2px 5px rgba(255,101,47,0.2); */
    transition: all 0.5s ease-in-out; 
  }

  .menu-btn .menu-btn__burger::after {
    transform: translate(-50%, -12px)
  }

  .menu-btn .menu-btn__burger::before {
    transform: translate(-50%, 12px)
  }

  /* Animation Btn */

  #app .menuBtn .animationClass {
    transform: translateX(-50px);
    background: transparent;
  }

  #app .menuBtn .animationClass::before {
    transform: rotate(45deg) translate(23px, -23px);
  }

  #app .menuBtn .animationClass::after {
    transform: rotate(-45deg) translate(23px, 23px);
  }

</style>