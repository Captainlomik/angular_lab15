export class Person {
  filter(arg0: (persons: any) => any) {
    throw new Error("Method not implemented.");
  }
    public id: number;
    public name: string;
    public surname: string;
    public phone:string;
    public email:string;

    constructor(name: string, surname: string, phone:string, email?:string, id?: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone=phone;
    }
}