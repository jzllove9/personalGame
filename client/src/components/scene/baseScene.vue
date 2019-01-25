<template>
    <div ref="canvasContainer" class="base-scene">
        <canvas ref="myCanvas" class="my-canvas"></canvas>
    </div>
</template>

<script>
    import MainSceneManager from '../../js/scene/mainSceneManager'

    export default {
        data() {
            return {
                canvasContainer: null,
                mainScene: null,
            }
        },

        methods: {
            initMainScene() {
                this.canvasContainer = this.$refs.canvasContainer;
                let _width = this.canvasContainer.clientWidth;
                let _height = this.canvasContainer.clientHeight;

                let _canvas = this.$refs.myCanvas;

                this.mainScene = new MainSceneManager({
                    height: _height,
                    width: _width,
                    canvas: _canvas
                });

                window.addEventListener('resize', () => {
                    this.resizeHandler()
                })
            },

            resizeHandler() {
                let _width = this.canvasContainer.clientWidth;
                let _height = this.canvasContainer.clientHeight;

                this.mainScene.resize(_width, _height)
            }
        },

        mounted() {
            this.initMainScene()
        },
    }
</script>

<style scoped>
    .base-scene {
        background-color: orange;
        widows: calc(100vw - 16px);
        height: calc(100vh - 16px);

        .my-canvas {
            height: 100%;
            width: 100%;
        }
    }
</style>