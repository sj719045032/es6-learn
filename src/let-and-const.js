/**
 * Created by sj on 2016/3/27.
 */
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}

f1();

const PI = 3.1415;
PI // 3.1415

//PI = 3;  报错，不能更改常量

const stone={};
stone.head="big";//只是引用不能变，可以修改值
console.log(stone);//{head:'big'}

const stone1=Object.freeze({});
//stone1.head='small'; 报错，不能改变对象
