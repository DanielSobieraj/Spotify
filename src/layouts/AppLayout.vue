<template>
    <div class="app-layout">
        <navbar/>
        <div class="app-layout__wrap">
<!--            <sidebar/>-->
            <div class="app-layout__main">
                <router-view/>
            </div>
        </div>
<!--        <player/>-->
    </div>
</template>

<script>
    import navbar from '../components/navbar/index'
    export default {
        name: "AppLayout",
        components: {
            navbar
        }
    }
</script>

<style scoped>

</style>