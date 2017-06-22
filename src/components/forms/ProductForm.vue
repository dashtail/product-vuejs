<template>

<div class="col-md-6 col-md-offset-3">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">Produto</h3>
        </div>
        <div class="panel-body">
            <form @submit.prevent="saveProduct()" method="POST">
                <div class="col-md-10">
                    <div class="form-group">
                          <label for="name">Nome</label>
                          <input id="name" autocomplete="off" data-vv-as="Nome" v-validate data-vv-rules="required" v-model="product.name" name='name' class="form-control">
                          <small class="text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</small>
                    </div>

                    <div class="form-group">
                          <label for="description">Descrição</label>
                          <textarea id="description" autocomplete="off" data-vv-as="Descrição" v-validate data-vv-rules="required" v-model="product.description" name="description" class="form-control"></textarea>
                          <small class="text-danger" role="alert" v-show="errors.has('description')">{{ errors.first('description') }}</small>
                    </div>
                    <div class="form-group">
                          <input type="submit" value="Salvar" class="btn btn-primary">
                          <button class="btn btn-default">Voltar</button>
                    </div>
                </div>
            </form>
        </div>
  </div>
</div>

</template>

<script>
import Product from '../../domain/product/Product'
import ProductService from '../../domain/product/ProductService'
export default {
    created() {
        this.service = new ProductService(this.$resource);
        if (this.id){
            this.service
                .detail(this.id)
                .then(product => this.product = product);
        }
    },
    data() {
        return {
            product : new Product(),
            id : this.$route.params.id

        }
    },

    methods:{
        saveProduct(){

            this.$validator
                .validateAll()
                .then(success => {
                    if (success){
                        this.service
                            .save(this.product)
                            .then(()=> this.$router.push({name:'Home'}),
                                err => console.log(err));
                    }
                });


        }
    }
}

</script>
<style >
</style>
