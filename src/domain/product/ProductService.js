export default class ProductService {

    constructor(resource) {

        this._resource = resource('product/{id}');
    }

    save(product) {

        if(product._id){
            return this._resource
            .update({ id : product._id}, product)
        }else{
            return this._resource.save(product);
        }
    }

    list() {

        return this._resource
          .query()
          .then(res => res.json());
    }

    delete(id) {

        return this._resource
            .delete({ id })
            .then(res => res.json());
    }

    detail(id){
        return this._resource
            .get({id})
            .then(res => res.json());
    }

}
