<template>
    <div>
        <my-btn type="default" @on-click="handleClick">按钮1</my-btn>
        <my-btn type="primary" @on-click="handleClick">按钮2</my-btn>
        <my-btn type="success" @on-click="handleClick">按钮3</my-btn>
        <my-btn type="warning" @on-click="handleClick">按钮4</my-btn>
        <my-btn type="error" @on-click="handleClick">按钮5</my-btn>
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
export default class test1  extends Vue{
    private handleClick(e: MouseEvent){
        console.log('handleClick', e);
    }
}
</script>