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

//PI = 3;  �������ܸ��ĳ���

const stone={};
stone.head="big";//ֻ�����ò��ܱ䣬�����޸�ֵ
console.log(stone);//{head:'big'}

const stone1=Object.freeze({});
//stone1.head='small'; �������ܸı����
