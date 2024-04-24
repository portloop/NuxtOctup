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
    border: 1px solid var(--Teal-Light, #00A8A8);
    background: var(--Gradient-Teal, linear-gradient(45deg, #007F82 -1.25%, #00A8A8 100.79%));
}

button:hover {
    border: 1px solid var(--Teal-Light, #00A8A8);
    background: var(--Teal-Light, #00A8A8);
}
</style>