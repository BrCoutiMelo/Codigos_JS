const person = {
    name: 'Luke',
    job: 'Father',
    parents: ['Joao','Maria']
}

const name = person.name

const {job} = person
console.log(name, job) 

function createUser({name, job, parents}){
    const id = Math.floor(Math.random()*9999)
    return{
        id,
        name,
        job,
        parents
    }

}

const pessoa = createUser(person)
console.log(pessoa)