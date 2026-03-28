module.exports = class UserDto {
    email;
    id;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}       


//it's a data transfer object (DTO) that is used to transfer data between different layers of an application. 
// It is a simple object that contains only the necessary data that needs to be transferred, without any additional logic or behavior.
//  In this case, the UserDto class is used to transfer user data from the database to the client, 
// and it only contains the email, id, and isActivated properties of the user model.
//we use it in service layer to return only necessary data to the client, instead of returning the entire user model which may contain sensitive information such as password.