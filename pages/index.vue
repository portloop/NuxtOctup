<template>
    <div>
        <dotlottie-player
        src="../assets/lottie/animation.lottie"
        :direction.attr="direction"
        controls
        autoplay
        :playMode.attr="playMode"
        loop
        :speed.attr="speed"
      />
    </div>
</template>
<script>

export default {
    components: {
    }
}
</script>
<style scoped>
    
</style>