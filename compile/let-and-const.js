"use strict";

/**
 * Created by sj on 2016/3/27.
 */
function f1() {
    var n = 5;
    if (true) {
        var _n = 10;
    }
    console.log(n); // 5
}

f1();

var PI = 3.1415;
PI; // 3.1415

//PI = 3;  ���������ܸ��ĳ���

var stone = {};
stone.head = "big"; //ֻ�����ò��ܱ䣬�����޸�ֵ
console.log(stone); //{head:'big'}

var stone1 = Object.freeze({});
//stone1.head='small'; ���������ܸı�����