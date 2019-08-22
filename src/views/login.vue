<template>
    <div class="login">
        <p>Wklej token:</p>
        <v-text-field
                label="Outlined"
                outlined
                v-model="token"
        ></v-text-field>
        <br>
        <button @click="sendToken">Naciśnij mnie</button>
        <br>
        {{ e }}
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    // import router from '../router/router'

    export default {
        name: "login",
        data() {
            return {
                token: '',
            }
        },
        methods: {
            ...mapActions(['token']),
            sendToken() {
            }
        }
    }
</script>

<style scoped>

</style>