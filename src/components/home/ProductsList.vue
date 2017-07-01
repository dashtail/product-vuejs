<template>
    <div class="content">
        <h1 class="text-center">Produtos</h1>
        <div class="col-md-12">
            <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product of products">
                        <td>
                            {{ product.name }}
                        </td>
                        <td>
                            {{ product.description }}
                        </td>
                        <td>
                            <router-link :to="{ name : 'update', params: { id: product._id} }">
                                <button class='btn btn-success'>Editar</button>
                            </router-link>
                            <router-link :to="'/'">
                                <button class='btn btn-danger' @click="removeProduct(product)">Remover</button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            <div class='text-center'>
                    <pagination></pagination>
                </div>
            </div>
    </div>

    </div>
</template>

<script>
import ProductService from '../../domain/product/ProductService'
import Pagination from '../shared/Pagination.vue'
import auth from '../../auth'

export default {
    data () {
        return{
            title: 'Produtos',
            products: []
        }
    },
    created(){
        this.service = new ProductService(this.$resource);
        console.log(auth.checkAuth());
        this.service
         .list()
         .then(products => this.products = products, err => console.log(err));
    },
    components:{
        'pagination' :Pagination
    },
    methods: {
        removeProduct(product){
            let that = this;
            this.$swal({
              title: 'Você tem certeza?',
              text: 'Você não poderar recuperar esse produto!',
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Sim!',
              cancelButtonText: 'Não'
          }).then(()=> {
                that.service.delete(product._id)
                    .then(()=>{
                        console.log('test');
                        let index =that.products.indexOf(product);
                        that.products.splice(index, 1);
                        that.$swal(
                          'Deleteado!',
                          'Seu produto foi apagado com sucesso.',
                          'success'
                        );
                    }, err => {
                        that.$swal(
                          'Ops!',
                          'Não foi possivel apagar seu produto. Tente mais tarde.',
                          'warning'
                        );
                    });

          });
        }
    }
}

</script>

<style>
.table {
    border-radius: 5px;
    width: 80%;
    margin: 0px auto;
    float: none;
}
</style>
