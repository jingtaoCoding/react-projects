# NOTE

## Learn TypeScript - Full Tutoral <https://www.youtube.com/watch?v=30LWjhZzg50>

- Type Safety
- Static checking
- ....10:51

## React & TypeScript - Course for Beginners <https://www.youtube.com/watch?v=FJDVKeh7RJI>

- src: <https://github.com/piyush-eon/react-typescript-taskify>

- <https://create-react-app.dev/docs/adding-typescript/>
-

```
  - npx create-react-app my-app --template typescript
```

```typescript
let name : string;
let age: number | string;    // union 
let isStudent: boolean; 
let hobbies: string[];
let role: [number, string];  // tuple 
let x: any;                 // any 
let dogName: unknown; 

// let person: Object; // not suggested 
// type Person = {
//   name: string; 
//   age?: number; 
// };
interface Person = {
  name: string; 
  age?: number; 
};
interface Guy extends Person{
  profession: string; 
}

type X = {
  a: string;
  b: number;
}
type Y = X &{
  c: string;
  d: number;
}
let y: Y = {
  c: "d",
  d: 33
}


let person: Person = {
  name: "JT",
};

let lotsofPersons: Person[]

function printName(name: String){
  console.log(name)
}
printName("JT")

```

- font: <https://fonts.google.com/specimen/Neucha>
- ES7 extention
- rsc
- rcfc ...
- react icon: <https://react-icons.github.io/react-icons/>
- drag and drop: <https://github.com/atlassian/react-beautiful-dnd>
