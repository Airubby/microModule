<template>
  <div class="content" id="template-box">
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'index',
    created () {
        
    },
    mounted() {
        //动态获取模板展示
        axios.get('/template/test.html').then(data => {
            let res=data.data;
            let arr=res.split("<script>")
            let dom=document.querySelector("#template-box");
            dom.innerHTML=arr[0];
            if(arr.length>1){
                let js=arr[1].split("<\/script>")[0];
                let script = document.createElement('script')
                script.type = "text/javascript"
                script.id = "template-script"
                script.text = js
                document.getElementsByTagName('body')[0].appendChild(script)
            }
        })
    },
    destroyed(){
        document.getElementsByTagName('body')[0].getElementById("template-script").remove()
    },
    data(){
        return{
            
        }
    },
    methods: {
        
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    
</style>
