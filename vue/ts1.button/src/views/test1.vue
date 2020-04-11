<template>
    <div>
        <my-btn></my-btn>
    </div>
</template>
<script lang="ts">

import {Vue, Component} from 'vue-property-decorator';
import myBtn from "@/components/my-btn.vue";

@Component({
    components:{
        myBtn
    }
})
export default class test1  extends Vue{}

</script>