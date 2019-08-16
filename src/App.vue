<template>
    <div id="app">
        <login>
        </login>
        <spotify></spotify>
    </div>
</template>

<script>
    import login from './components/login'
    import spotify from './components/spotify'


    export default ({
        el: '#app',
        components: {
            login,
            spotify,
        },
    });
</script>