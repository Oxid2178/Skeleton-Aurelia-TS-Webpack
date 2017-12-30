import { AWSCognitoServices } from "./services/aws-cognito-services"
import { autoinject } from "aurelia-framework";
import { View } from "aurelia-framework";

@autoinject( AWSCognitoServices )
export class Login {

    constructor(private awsCognitoSerives: AWSCognitoServices) {
        console.log("Login constructor called...");
    }

}