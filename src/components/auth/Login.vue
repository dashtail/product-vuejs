<template>

<div class="col-md-6 col-md-offset-3">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">Login</h3>
        </div>
        <div class="panel-body">
            <form @submit.prevent="login()" method="POST">
                <div class="col-md-10">
                    <div class="form-group">
                          <label for="username">Usuário</label>
                          <input id="username" autocomplete="off" data-vv-as="Usuário" v-validate data-vv-rules="required" v-model="user.username" name='username' class="form-control">
                          <small class="text-danger" v-show="errors.has('username')">{{ errors.first('username') }}</small>
                    </div>

                    <div class="form-group">
                          <label for="password">Senha</label>
                          <input type="password" id="password" autocomplete="off" data-vv-as="Senha" v-validate data-vv-rules="required" v-model="user.password" name="description" class="form-control"></textarea>
                          <small class="text-danger" role="alert" v-show="errors.has('password')">{{ errors.first('password') }}</small>
                    </div>
                    <div class="form-group">
                          <input type="submit" value="Entrar" class="btn btn-primary">
                    </div>
                </div>
            </form>
        </div>
  </div>
</div>

</template>

<script>
import User from '../../domain/user/User'
import auth from '../../auth'
export default {
    created() {
    },
    data() {
        return {
            user : new User(),
        }
    },

    methods:{
        login(){
            auth.login(this, this.user, '/')
        }
    }
}

</script>
<style >
</style>
