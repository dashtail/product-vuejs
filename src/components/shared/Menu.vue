<template>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
              <li v-for="route in routes">
                  <router-link :to="route.path ? route.path : '/'">{{ route.name }}</router-link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>

export default {
    props: {
        routes:{
            required: true,
            type: Array
        }
    }
}
</script>
<style></style>
