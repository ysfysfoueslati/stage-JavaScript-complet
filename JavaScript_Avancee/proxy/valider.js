const john = {
    name:'John Doe',
    age: 20,
}

function updateUser(person){
    person.age=50
}

const majeurProxyHandler = {
    set(target,prop,value,receiver) {
        if (prop=='age' && value < 18){
            throw new Error ('la personne ne peut pas devenir mineure')
        }    
        return Reflect.set(...arguments)
    }
}

const aliveProxyHandler = {
    set(target,prop,value,receiver) {
        if (prop=='age' && value > 100){
            throw new Error ('la personne est trop vieille')
        }    
        return Reflect.set(...arguments)
    }
}

const johnMajeur= new Proxy(new Proxy(john,majeurProxyHandler),aliveProxyHandler)

updateUser(johnMajeur)
console.log(johnMajeur)