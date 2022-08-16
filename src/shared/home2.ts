// 1. Работа с простыми типами
//
// Напишите тип функции, конкатенирующей две строки
//
//
//
function concat(str1: string, str2 : string) : string {
    return str1 + str2;
}
concat('Hello ', 'World') // -> Hello World;
//
//
//
// 2. Работа с интерфейсами
//
// Напишите интерфейс для описания следующих данных
//
interface IHometask {
    howIDoIt: string;
    simeArray: Array<string | number>;
    withData?: Array<IHometask>
}
//
const MyHometask : IHometask = {

    howIDoIt: "I Do It Wel",

    simeArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}
//
//
//
// 3. Типизация функций, используя Generic
//
// В уроке про Generics мы написали интерфейс массива MyArray
//
const MyArray : MyArray<number> = [1, 2, 3];

interface MyArray<T> {

    [N: number]: T;

    map<U>(fn: (el: T) => U): U[];

    // добавьте типизацию для метода reduce

    reduce(fn: (accumulator: T, value: T) => T, initialValue: T): T;
};
//
//
//
// Справка о работе reduce
//
const initialValue = 0;
let res = MyArray.reduce((accumulator, value) => accumulator + value, initialValue); // -> 6
console.log(res);

//
//
//
// Результат работы предыдущей функции передается в следующую в качестве аргумента accumulator. На итерации 0 - accumulator === initialValue. Если initialValue не указан, то accumulator это 0 элемент массива
//
//
//
// 4. Работа с MappedTypes
//
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.

// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}



type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}