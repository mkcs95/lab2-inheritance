class SavingsAccount {

private initialBalance:number;
private owner:string;
 
 constructor(initialBalance:number, owner:string) {
       this.initialBalance = initialBalance;
       this.owner = owner;
    }

 private deposit(depositAmount:number): void {
     this.initialBalance += depositAmount;
 }

  private withdraw(withdraw:number): void {
     this.initialBalance -= withdraw;
 }

  private checkBalance(): void {
     console.log('The current balance of ' ${this.owner} + ' is ' ${this.initialBalance} );
 }
}

let deposit:number = 10000;
let withdraw:number = 2000;

checkBalance();




