<template>
    <div id="app" class="app">
        <app-layout></app-layout>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import AppLayout from "@/layouts/AppLayout";

    export default ({
        el: '#app',
        components: {
            AppLayout
        },
        computed: {
            ...mapGetters({
                notFound: 'app/notFound'
            })
        },
        methods: {
            ...mapActions({
                init: 'app/init',
            })
        },
        created() {
            this.init();
        }
    });
</script>