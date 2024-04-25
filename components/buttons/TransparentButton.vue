<template>
    <button class="text-white font-semibold text-sm items-center justify-center py-2 px-4 rounded-lg">{{ text
        }}</button>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
button {
    border: 1.5px solid #504B5A;
    color: #504B5A;
    background: #FFF;
    transition: .2s;
}

button:hover {
    background-color: #504B5A;
    color: #fff;
}
</style>