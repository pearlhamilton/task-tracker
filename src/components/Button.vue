<template>
    <button @click="onClick()" :style="{background:color}">{{text}}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick(){
            this.$emit('toggle-form')
        }
    }
}
</script>

<style scoped>
button{
    padding:5px;
    border-radius: 5px;
}
</style>