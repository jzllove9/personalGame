<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <base-scene></base-scene>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from "@/components/HelloWorld.vue";
    import BaseScene from '@/components/scene/baseScene.vue'

    export default {
        name: "home",
        components: {
            // HelloWorld
            BaseScene
        }
    };
</script>
