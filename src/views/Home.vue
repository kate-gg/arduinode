<template>
  <div class="container my-5">
    <!-- <h1>LED built-in state</h1>
    <button @click="changeLED()" class="btn btn-primary mb-4 btn-lg">{{(LED)?'Turn on':'Turn off'}}</button>
    <h1>LED built-in Blink state</h1>
    <div class="input-group mb-3 input-group-lg">
      <input type="number" class="form-control">
      <button class="btn btn-primary">Set blink (Millisecond)</button>
    </div> -->
    <h1>Ultra sonic sensor <span class="font-monospace">(HC-SR04)</span></h1>
    <h3>{{distance}} Cm</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
    data:()=>{
      return{
        distance: 0
      }
    },
    methods:{
    },
    created() {
      this.$socket.$subscribe('HCSR04', payload => {
        this.distance = payload.distance;
      });
    }
}
</script>
