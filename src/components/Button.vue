<template>
    <button :style="{background:color}">{{text}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        color: String
    }
}
</script>

<style scoped>
button{
    padding:5px;
    border-radius: 5px;
}
</style>