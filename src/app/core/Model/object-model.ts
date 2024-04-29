export class User{
    name!: string;
    email!: string;
    password!: string;
    role!: string;
    uploadPhoto!: string;
    mobNumber!: string;
    address!: Address;
    gender!: string;
    dob!: Date;
    language!: string;
    agreetc!: boolean;
    age!:number;
    //aboutYou!: string;
    
   

}
export class Address{
    id!: number;
    addLine1!: string;
    addLine2!: string;
   
    city!: string;
    state!: string;
    zipCode!: number;
}
export class Product{
    id!: number;
    name!: string;
    uploadPhoto!: string;
    mrp!: number;
    uploadDesc!: string;
    dp!:number;
    status!:boolean;

}
export class Order{
    id!: number;
    userId!: number;
    sellerId!: number;
    product!: Product;
    deliveryAddress!: Address;
    contact!:number;
    dateTime!:string;

 
}