import login from '/src/components/login'
import spotify from '/src/components/spotify'

export const routes = [
    { path: '', component: login },
    { path: '/spotify', component: spotify }
];