const person: {
    name: string;
    age: number;
    hobbies: string[];
    role : [number, string]
} =
{
name : 'praveen',
age : 25,
hobbies : ['sports','reading books'],
role : [2,'admin']
};

person.role.push('chairman');
//person.role[1] = 20;
person.role = [30,'director'];

console.log("name and age of person "+person.name + " "+ person.age);
for(const hobby of person.hobbies){
console.log('my hobby '+ hobby)
}

for(const r of person.role){
    console.log('my role '+ r);
    }