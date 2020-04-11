
<template>
  <button :class="[`btn-${type}`]" @click="evnetClick">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component 
export default class Btn extends Vue{
  @Prop(String) private type!:string;
  @Emit("on-click") private emitEvent(e: MouseEvent) {}

  private evnetClick(e: MouseEvent){
    this.emitEvent(e);
  }

  private created(){
    console.log('mybtn created hook', this.type);
  }
}
</script>

<style lang="stylus">
.btn-primary{
  background-color: lightblue;
}
.btn-success{
  background-color: lightgreen;
}
.btn-warning{
  background-color: orange;
}
.btn-error{
  background-color: red;
}


</style>

