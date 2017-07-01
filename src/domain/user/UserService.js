export default class userService {

    constructor(resource) {

        this._userResource = resource('user/{id}');
    }

    save(user) {
        if(user._id){
            return this._userResource
            .update({ id : user._id}, user)
        }
    }

    detail(id){
        return this._userResource
            .get({id})
            .then(res => res.json());
    }

}
