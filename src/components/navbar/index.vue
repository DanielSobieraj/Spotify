
<template>
    <nav class="navbar">
        <navbarSearch/>
    </nav>
</template>

<script>
    import navbarSearch from "@/components/navbar/navbarSearch";

    export default {
        name: 'navbar',
        components: {
            navbarSearch
        }
    }
</script>

<style scoped lang="sass">
    .navbar
        display: flex
        height: 40px
</style>