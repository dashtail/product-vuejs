<template>
    <div class="content">
        <main-menu :routes="routes"></main-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/Menu.vue'

export default {
    data(){
        return{
            routes : routes.filter(route => route.menu)
        }
    },
    components:{
        'main-menu' :Menu
    }
}
</script>

<style>

</style>
