enum Role { ADMIN = 1, READ_ONLY = 2, AUTHOR = 3 };
// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  // Tuple
  role2: [number, string];
  // Enum
  role: Role;
} = {
  name: 'Daniel',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role2: [2, 'author'],
  role: Role.ADMIN
};

// Union types
function combine2(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
  }
