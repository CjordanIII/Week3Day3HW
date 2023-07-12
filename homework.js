class Governor{

        static yearElected(year){
            return year
        }
        static voteCount(vote){
            return vote
        }
        static state(st){
            return st
        }


}

console.log(Governor.yearElected(2019))
console.log(Governor.voteCount(180))
console.log(Governor.state('TX'))



class Person{
    constructor(height, weight, age){
        this.height = height
        this.weight = weight
        this.age = age
    }
    canDrink(){
        if(this.age>=21){
            return 'you can drink'
        }
        else{
            return 'you cannot drink'
        }
    }
    state(where){
        return where
    }
    age(){
        return this.age
    }
    

}

const person1 = new Person('6ft',200,22)

class PostalWorker extends Person{
    constructor(height, weight, age, hoursWorded,payPerHour){
        super(height, weight, age,)
        this.hoursWorded = hoursWorded
        this.payPerHour = payPerHour
    }
    payIncrease(increase){
        this.payPerHour = this.payPerHour + increase
    }
    totalEarnings(){
        return this.hoursWorded * this.payPerHour
    }

    
    
}

const postalworker1 = new PostalWorker('6ft',200,35,40,15)
postalworker1.payIncrease(12)
console.log(postalworker1.totalEarnings())
console.table(postalworker1)
const postalworker2 = new PostalWorker('5ft',140,18,25,1)
console.log(postalworker2.totalEarnings())
console.table(postalworker2)

class Chef extends Person{
    constructor(height, weight, age, ...menu){
        super(height, weight, age)
        this.menu = menu
    }
    itemsOnMenue(){
        return this.menu
    }
}

const chef1 = new Chef('4ft llin',230,22,['chicken','peas','greens'])
console.table(chef1)
console.log(chef1.itemsOnMenue())
const chef2 = new Chef('3ft',60,15,['eggs','grit','shrimp'])
console.log(chef2.itemsOnMenue())
console.table(chef2)
