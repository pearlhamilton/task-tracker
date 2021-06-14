<template>
    <header>
        <h1>{{title}}</h1>
        <Button @toggle-form = "$emit('toggle-form')" text="Add Button" color="lightGreen"/>
    </header>
</template>

<script>
    import Button from './Button'
    export default{
        name: 'Header',
        props: {
            title: String
        },
        components: {
            Button
        }
    }

</script>

<style scoped>
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
