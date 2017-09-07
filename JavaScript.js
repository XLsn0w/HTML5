
function methodName () {
      <script>
      //每几句代码结束“;”
      console.log(100);
      //打印多个值，逗号隔开
      console.log(100,200,'qqqq');
      
      /* ECMAScript:
       * 变量：
       * 语法：var 变量名(variable: 缩写)
       * 命名规格：
       * 1.由字母或者数字、下划线组成，数字不能开头
       * 2.不能和系统的关键字重名（id,div）
       * 3.不能和系统保留字重名（int,float,boolean,class,long,public,short,static）
       */
      var a = 100;
      var b = 100.0;
      var str = 'aaa';

      let c = 111;
      
      
      console.log('a=',a);
      console.log('a='+a);
      
//      var 3name = '张三';（错误：数字不能开头）
//      var id = 100;(系统的关键字重名)
//      var div = '111';(不推荐)
//      var int = 100; (不推荐,系统保留字重名)
      
      //同时定义多个变量，用逗号隔开
      var a=1,b=2,c=3,d=4;
      //允许我们定义两个重名的变量
      console.log('a='+a,'b='+b);
      
      //赋值
      a = 1000;
      console.log('a='+a);
      
      //交换两个值
      var a = 10,b = 20;
      console.log('a='+a,'b='+b);
      
      var temp = 0;
      temp = a;
      a = b;
      b = temp;
      console.log('a='+a,'b='+b);
      
      /* 
       * 变量名起名最好是见名知意
       * 1.驼峰命名法：第一个单词小写，中间所有单词首字母大写
       * appleCount topRedObject
       * 2.属性+类型+描述
       * redNumberCount
       * 
       * 
       * 
       * 变量类型：
       * 变量的类型是由给变量赋值的时候决定，js是弱类型语言，一个变量可以赋值多个类型
       * 
       * 1.Number: 1,2,7,8,100....
       * 2.String: 字符串类型，定义变量值用单引号或者双引号包裹  var str = '你好'
       * 3.undefined: 未定义类型
       * 4.boolean: 布尔类型，真假类型，值：两种情况：true false
       * 5.null: 空类型
       * 
       * ------------（引用类型）-------------------
       * 6.object: 对象类型（属性和方法）
       */
      
      //typeof: 查看类型
      var a = 100;
      console.log(typeof a);//number
      a = 'aaaa';
      console.log(typeof a);//string
      
      //1.Number
      var a = 10;//十进制number类型
      var b = 010;//八进制 8
      console.log('b='+b);
      var c = 0x1a//十六进制 16+10 = 26
      console.log('c='+c);
      
      //e:1.12 * 1000
      var a = 1.12e3;
      console.log('a='+a);
      
      //最小值 MIN_VALUE: Number属性
      console.log(Number.MIN_VALUE);
      //最大值
      console.log(Number.MAX_VALUE);
      
      //正无穷
      var e = 100e10;
      var e = 100e300;
      e = 1 / 0;
      console.log('e='+e);//Infinity:正无穷
      //负无穷
      e = -100e10000;
      console.log('e='+e);//-Infinity负无穷
      
      //函数：判断是不是有限数字
      var result = isFinite(e);
      console.log('resule='+result);//false：不是，（是一个无限数字）
      
      e = 100;
      var result = isFinite(e);
      console.log('result='+result);//true：是，（是一个有限数字）
      
      //NaN not a number
//      alert(NaN);//NaN
      
      result = isNaN(100);
      console.log('result='+result);//false 是一个数字
      
      //不是一个数字？
      result = isNaN('qqq');
      console.log('result='+result);//true 答：对，我不是一个数字
      
      //2.String
      var str = 'hello';
      console.log(str + ' ' + typeof str)//hello string
      //3.undefined
      var value;
      console.log('value='+value)//underfined
      //typeod underfined == underfined
      console.log(typeof value);//underfined
      
      //4.boolean
      var boolVl = true;
      console.log('boolVl='+boolVl);//true
      console.log(typeof boolVl);//boolean
      
      //5.null  typeof null == object
      var nullValue = null;//空对象，不占用内存的对象
      console.log('nullValue='+nullValue);//null
      
      console.log(typeof nullValue);//objuct
      
      
      //6.object:对象类型（引用类型）（面向对象的重点）
      var obj = new Object();
      console.log(obj);//object{}
      console.log(typeof obj);//object
      //属性，自定义属性
      obj.propertyCus = 100;
      obj.propertyCus2 = '属性2';
      console.log(obj.propertyCus,obj.propertyCus2);//100 "属性2"
      //对象声明2： 字面量创建
      var obj2 = {
        name:'小鹏',
        age:30,
        eat:function(){
          alert('我在吃饭');
        },
        objSon:{
          sonName:'孩子'
        }
      };
      console.log(obj2.name);//小鹏
      console.log(typeof obj2.name);//string
      console.log(typeof obj2);//object
      //调用对象的方法 eat()
//      obj2.eat();

      console.log(obj2.objSon);//object{}
      //访问子对象下的属性
      console.log(obj2.objSon.sonName);//孩子
      
      //对象类型(创建一个number类型对象)
      var obj3 = new Object(2);
      //Number {[[PrimitiveValue]]:2}
      console.log(obj3);
      console.log(obj3 + 3);//5
      console.log(typeof obj3);//object
      
      //new Number( ): 创建number类型对象
      var nbObj = new Number(10);
      //Number {[[PrimitiveValue]]: 10}
      console.log(nbObj);
      console.log(typeof nbObj);//object
      
      //boolean对象
      var boolObj = new Boolean(true);
      //Boolean {[[PrimitiveValue]]: true}
      console.log(boolObj);
      //object
      console.log(typeof boolObj);
      
      //获取div，查看div
      console.log(div1);
      //完整方法获取div
      var divObj = document.getElementById('div1');
      console.log(divObj);
      console.log(typeof divObj);//object
      
      //给div对象自定义属性
      divObj.indexValue = 10;
      //10
      console.log(divObj.indexValue);
      
      //基本类型不可以添加自定义属性，只有对象可以
      var str = '字符串';
      str.indexValue = 20;
      //undefined
      console.log(str.indexValue);
      
      var num = 100;
      num.indexValue = 'index';
      //underfined
      console.log(num.indexValue);
      
      //基本类型和对象类型的不同
      
      var a = 10;
      var b = a;
      console.log(a,b);//10 10
      b = 20;
      console.log(a,b);//10 20
      
      var obj = new Object();
      obj.indexV = 10;
      //obj:地址 obj2=obj: 地址赋值
      var obj2 = obj;
      //10 10
      console.log(obj.indexV,obj2.indexV);
      
      obj2.indexV = 20;
      console.log(obj.indexV,obj2.indexV);//20 20
      
      //内存：栈区 堆区 常量区 全局区 静态区 程序代码区
      /*
       * 栈区：存放函数参数值，局部变量值（var a:a局部变量值）所有的基本类型都放到栈区（内存系统自动释放）
       * 堆区：有的程序员手动管理内存（面向对象语言下，js下自动管理）存放的是我们对象类型
       * 常量区：常量数字
       * 静态区：static：内存申请后一直到程序结束释放
       * 程序代码区：存放函数二进制码
       */
      
      
      //运算符（+ - * / % -- ++ ）
      var a = 3,b = 2;
      var c = a + b;
      console.log(c);//5
      c = a - b;
      console.log(c)//1
      c = a * b;
      console.log(c);//6
      c = a / b;
      console.log(c);//1.5
      c = a % b;
      console.log(c);//1
      
      //++
      a = 10;
      //a = a + 1
      a++;
      console.log(a);//11
      
      
      //--
      //a = a - 1
      a--;
      console.log(a);//10
      
      //++在前 a = a + 1
      ++a;
      console.log(a);//11
      //a = a - 1
      --a;
      console.log(a);//10
      
      /*
       * ++或者-- 在后面，先赋值，后++或者--运算
       * ++或者-- 在前面，先运算，后赋值
       * 
       * a肯定会++1或者--1
       * 
       */
      a = 10;
      var b = a++;
      console.log(a,b);// 11 10
      
      a = 10;
      var b = ++a;
      console.log(a,b);// 11 11
      
      a = 1;
      var c = ++a + a++ + --a + a--;
      //2 + 2 + (3-1) + 2
      console.log(a);//1
      
      console.log(c);//8
      
      //字符串++
      var str = '100';
      console.log(typeof str);//string
      //++对字符串有隐式类型转换,string->number
      str++;
      console.log(str);//101
      console.log(typeof str);//number
      
      //非数字类型字符串++可以转换为number，但是结果是：NaN
      str = 'aaa';
      str++;
      console.log(str);//NaN
      console.log(typeof str);//number
      
      //boolean类型++  ++对boolean类型有隐式类型转换,Boolean->number
      /*
       * true: 1
       * false: 0
       */
      var bVal = true;
      bVal++;
      console.log(bVal);//2
      console.log(typeof bVal);//number
      
      //+和- 正负
      var num = 100;
      num = -num;
      console.log(num);//-100
      
      //+:把字符转转换为number(技巧)
      str = '100';
      console.log(typeof +str);//number
      
      //boolean
      bVal = false;
      console.log(+bVal);//0
      console.log(typeof +bVal);//number
      
      //赋值运算（=，+=，-=，*=，/=，%=）
      var a = 10;
      //a = a + 10
      a += 10;
      console.log(a);//20
      
      //a = a * 2
      a *= 2;
      console.log(a);//40
      
      //字符串
      var str1 = '你好';
      var str2 = '不好';
      //拼接
      var str3 = str1 + str2;
      console.log(str3);//你好不好
      
      //字符串和number相加: 结果转换为string类型
      var num = 100;
      var value = num + str3;
      console.log(value);//100你好不好
      console.log(typeof value);//string
      
      str3 = '100';
      value = str3 + num;
      console.log(value);//100100
      
      //两个number类型相加
      value = +str3 + num;
      console.log(value);//200
      console.log(typeof value);//number
      
      str3 = '你的年纪是：' + 10 + 20;
      console.log(str3);//你的年纪是：1020
      
      str3 = 10 + 20 + '你的年纪是：';
      console.log(str3);//30你的年纪是：
      console.log(typeof str3);//string
      
      
      
      //字符串相同类型的引号不可以嵌套（单引号不可以嵌套单引号，双引号不可以嵌套双引号）
      
//      var str = 'hello world,'你好吗' ';//错误
      var str = 'hello world,"你好吗" ';//hello world,"你好吗" 
      console.log(str);
      
//      var str = "hello world,"你好吗" ";//错误
      var str = "hello world,'你好吗' ";//hello world,"你好吗" 
      console.log(str);
      
      
      //转义字符：改变字符本身意义
      /*
       * \" 代表"
       * \n :换行
       * \t :tab
       */
      
      str = '说：\"你好\"';
      console.log(str);//说："你好"
      
      console.log('\t中北，\n你好');
      
      /*
       * 隐式类型转换：+ ++对字符串操作，字符串+number
       * 显示类型转换
       * Number(str1):返回值是number类型
       * 
       */
      var str1 = '100';
      var str2 = '100';
      var num = Number(str1) + Number(str2);
      console.log(num);//200
      console.log(typeof num);//number
      
      console.log(typeof Number('200'));//number
      console.log(Number(true));//1
      console.log(typeof Number(true));//number
      
      console.log(Number('11a'));//NaN
      
      //
      console.log(String(111));
      console.log(typeof String(111));//string
      
      console.log(String(false));
      console.log(typeof String(false));//string
      
      
      //Boolean()：将其他类型转换为布尔类型
      /*
       * 非0转换为true，下面几个类型转换为false
       */
      console.log(Boolean('你好'));//true
      console.log(Boolean(11));//true
      console.log(Boolean(0));//false
      console.log(Boolean(''));//false
      console.log(Boolean(null));//false
      console.log(Boolean(undefined));//false
      console.log(Boolean(NaN));//false

            /* 程序三大结构
       * 1.顺序结构
       * 代码从上往下执行
       * 
       * 2.分支结构
       * 根据条件执行相应代码
       * 
       * 3.循环结构
       * 在满足特定条件下，反复执行同一段代码
       * 
       * 
       * 
       * 分支结构
       * if语句
       * 
       * 第一种：条件表达式为真，执行大括号代码
       * if(条件表达式){
       *  语句；
       * }
       * 
       * 表达式：有常量，变量，运算符组成，表达式必须有一个值：a, a + 10,10, a = 10, a > 10.... 
       * 
       */

      var a = 50,
        b = 50;
      if (a > b) {
        console.log('最大值是：' + a);
      }
      if (a < b) {
        console.log('最大值是：' + b);
      }
      if (a == b) {
        console.log('a == b');
      }

      /* 
       * 第二种：
       * if(条件表达式){
       *  语句1；
       * }else{
       *  语句2；
       * }
       * 
       * 如果条件表达式位置，执行语句1，否则执行语句2
       * 
       */

      var str = '下雨了';
      if (str == '下雨') {
        console.log('上课');
      } else {
        console.log('还得上课');
      }

      /* 
       * 了解函数：
       * 函数定义：
       * function name(){
       *  函数体；
       * }
       * 
       * //调用
       * name();
       */

      //比较两个数的最大值
      function test() {
        var a = 10,
          b = 20;
        if (a > b) {
          console.log('最大值是：' + a);
        } else {
          console.log('最大值是：' + b);
        }
      }
      //调用
      test();

            /*
       * Array: 一个包含大量数据的有序集合
       * 创建数组方式：
       * 第一种：
       * new 运算符： new Array()
       * 
       * 第二种：字面量方式创建
       * [1,2,3];
       * 
       */
      
      //数组创建
      var arr = new Array();
      
      console.log('数组值：'+ arr);//空数组
      console.log('数组类型：'+ typeof arr);//object
      
      //创建并赋值
      arr = new Array(1,2,3,4);
      console.log('数组值：'+ arr);//1,2,3,4
      console.log('数组类型：'+ typeof arr);//object
      
      //访问数组内容
      //通过：数组名[下标] 小标是从0开始
      console.log('arr[0]: ' + arr[0]);
      console.log('arr[1]: ' + arr[1]);
      console.log('arr[2]: ' + arr[2]);
      console.log('arr[3]: ' + arr[3]);
      
      console.log('arr[4]: ' + arr[4]);//underfined
      
      //new 创建数组2:(创建一个包含10个元素的数组)
      //条件： 只能是数字，并且只有一个
      
      arr = new Array(10);
      console.log('数组：' + arr);//,,,,,,,,,
      
      //赋值
      arr[0] = 0;
      arr[3] = 3;
      arr[5] = 5;
      arr[9] = 9;
      
      console.log('数组：' + arr);//0,,,3,,5,,,,9
      
      //new 关键字可以省略
      arr = Array(1,2);
      console.log('数组：' + arr);//数组：1,2
      console.log('数组：' + typeof arr);//数组：object
      
      console.log('~~~~~~~~~~~~~~~~~~');
      //2: 字面量方式创建数组（常用）
      var arr2 = [];
      console.log(arr2);//[]
      console.log('数组：' + typeof arr2);
      //创建并初始化
      arr2 = [1,2,3,4];
      console.log(arr2);//[1, 2, 3, 4]
      
      console.log(arr2[2]);//3
      console.log(typeof arr2[2]);//number
      
      //查看数组长度（元素个数）
      console.log(arr2.length);//4
      
      //替换
      arr2[0] = 10;
      console.log(arr2);//[10, 2, 3, 4]
      //添加
      arr2[4] = 20;
      console.log(arr2);//[10, 2, 3, 4, 20]
      
      //第六个位置没有赋值
      arr2[7] = 30;
      console.log(arr2);//[10, 2, 3, 4, 5: 20, 7: 30]
      
      //强制元素量  给length赋值(js允许修改length,多余的作为空的存储位置)
      var arr3 = [1,2,3];
      console.log(arr3.length);//3
      arr3.length = 5;
      console.log(arr3.length);//5
      console.log(arr3);
      
      //循环遍历数组
      var arr4 = [1,2,3,4,5,6,7];
      for(var i = 0; i < arr4.length; i++){
        console.log(arr4[i]);
      }
      
      //数组是可以存放不同类型
      arr4 = [1,1.2,true,'字符'];
      console.log(arr4);//[1, 1.2, true, "字符"]
      
      console.log(typeof arr4[2]);//boolean
      console.log(typeof arr4[3]);//string
      //可以存储表达式
      var a = 1;
      arr4 = [a,a + 1, a - 1, a * 2, arr3];
      console.log(arr4);//[1, 2, 0, 2, Array[5]]
      
      //找到arr4下的arr3
      console.log(arr4[4]);//[1, 2, 3]
      //访问arr3下数组
      console.log(arr4[4][0]);//1
      
      //随机产出10个数字[50,80]整数，存放到数组
      var arr5 = [];
      for (var i = 0; i < 10; i++) {
        //产生随机数
        var random = Math.floor(Math.random() * 31 + 50);
        //存到数组
        arr5[i] = random;
      }

            /*
       * getElementsByClassName: 取出class是red的数组集合（数组存储的是元素对象）
       * getElementsByTagName: 取出所有div（返回数组集合）
       */
      var redObj = document.getElementsByClassName('red');
      console.log(redObj);


            //变量类型
      /*
       * 1.number
       * 2.string
       * 3.boolean
       * 4.undefined
       * 5.null:空类型（特殊对象类型）
       * 6.object:对象类型（属性和方法）
       */
      
      var num = 20;
      //typeof:查看类型
      console.log(typeof num);
      
      //string
      var str = "123";
      console.log(typeof str);
      /*
       * \n: 代表换行
       * \t: tab缩进
       * \": "
       */
      var str2 = "I\nLOVE\tYOU\"";
      console.log(str2);
      
      console.log(false,true);
      console.log(typeof true);//boolean
      
      //undefined: 当我们定义一个变量，但是没有给这个变量赋值
      //typeof undefined == undefined
      var unValue;
      console.log(unValue,typeof inValue);
      
      //null
      var nullValue = null;
      console.log(typeof nullValue);//object
      
      //对象类型：（属性+方法）
      var obj1 = {
        name:"名字",
        age:20
      };
      //声明后添加属性
      obj1.gender = "2";
      console.log(typeof obj1);
      console.log(obj1.name);//访问对象属性用 对象+点+属性
      console.log(obj1.name2);//undefined
      console.log(obj1.gender);
      //第二种，构造函数的方法
      var obj2 = new Object();
      console.log(typeof obj2);
      
      //获取元素
      console.log(document);
      console.log(typeof document);
      
      //调用对象的方法：用.点+方法名
      //函数格式：调用函数： name()  括号里是参数
      //getElementById:返回值
      var oDiv = document.getElementById("div1");
      console.log(oDiv,typeof oDiv);  //object
      
      oDiv.name = "名字";//自定义属性
      console.log(oDiv.name);
      //
      oDiv.style.width = '100px';
      oDiv.style.height = '100px';
      oDiv.style.backgroundColor = 'red';
      
      //类型转换
      var lanStr = '111';
      var lanNum = 100;
      var result = +lanStr + lanNum;
      console.log(result,typeof result);//211 "number"
      
      var transStr = '100';
      var transNum = Number(transStr);
      console.log(transNum,typeof transNum);//100 "number"
      
      //NAN
      //number -> string
      var num = 100;
      var str = String(num);
      console.log(str,typeof str);//100 string


            /*
        函数：封装了一段操作代码块
        
        语法：
       1.函数的声明
       
       function 函数名(参数1，参数2){
        函数体
       }
       函数声明中的参数叫做形参，没有确切的值，只是一个参数名
       
       2.函数调用
       函数调用传递的参数叫做实参（有实际的值）
       
       语法：
       
       函数名字（参数1，参数2，参数3）；
       
       注意：
       函数的参数个数没有限制，函数的参数类型可以是任何类型
       
       * */
      
      //简单函数
      function hello(){
        document.write('hello world');
      }
      //函数调用
//      hello();
      
      //参数可以比形参多，不会报错
      hello('1111',20);
      
      //函数分类
      /*
       1.没有参数，没有返回值
       2.没有参数，有返回值
       3.有参数，没有返回值
       4.有参数，有返回值
       * */
      
      //1.没有参数，没有返回值
      function fn1(){
        document.write('<hr>没有参数，没有返回值');
      }
      fn1();
      
      var fnRe = fn1();
      //undefined:没有返回值的函数，返回类型默认是underfined
      console.log('没有参数，没有返回值的结果' + fnRe);
      
        //变量：分为全局变量和局部变量
        //1：函数内部声明的变量叫做局部变量，只能在该函数体内使用，函数外部访问不到
        //2：我们在script声明的变量叫做全局变量，使用范围：函数内部或者外部都可以
      
        //从里面可以看到外面，从外面看不到里面
      
      //2.没有参数，有返回值
      function sumFn(){
        var a = 10, b = 20;
        var sum = a + b;
        //return: 返回函数执行结果给外部
        return sum;
      }
      
      var re = sumFn();
      document.write('<hr>a与b的和为：' + re);
      document.write('<hr>a与b的和为：' + sumFn());
//      alert(a);//a is not defined

      var c = 20;
      function fn2(){
        document.write('<hr>访问全局变量：' + c);
      }
      fn2();
      
      
      //3.有参数，没有返回值
      function sumFn2(para1,para2){
        console.log(para2);
        var sum = para1 + para2;
        document.write('<hr>sum:' + sum);
      }
      sumFn2(100,200);
      sumFn2(100,'200');
      sumFn2(100);//参数少传默认未定义
      sumFn2(100,200,300,400);//实参和形参按顺序对应
      
      //函数调用的时候，形参会拷贝实参的值
      
      //变量的拷贝赋值
      //var val2 = val1;:把val1的值拷贝一份，给val2保存，两者相互独立，不会有影响
      var val1 = 100;
      var val2 = val1;
      val1 = 200;
      //val2的值100
      document.write('<hr>val2:' + val2);
      
      //引用类型（对象）
      var obj1 = {
        value:100,
      };
      //obj2指向obj1
      var obj2 = obj1;
      //修改
      obj1.value = 200;
      
      //obj2的value属性值？
      document.write("<hr/>obj2.value:" + obj2.value);
      
      //实参给形参赋值的时候，也是拷贝赋值
      function fn3(name){
        name = '张三';
      }
      var name = '名字';
      fn3(name);
      document.write("<hr>name:" + name);
      
      //交换两个值
      function exchangeValue(num1,num2){
        var temp = num1;
        num1 = num2;
        num2 = temp;
        document.write('<hr>num1:' + num1 + 'num2:' + num2);//200,100
      }
      var n1 = 100,n2 = 200;
      exchangeValue(n1,n2);
      document.write('<hr>n1:' + n1 + 'n2:' + n2);//100,200
      
      //对象类型改值
      function changeV(obj){
        obj.name = '李四';
      }
      var obj = {
        name:'张三',
        age:10
      };
      changeV(obj);
      //obj.name?
      document.write('<hr>obj的name:' + obj.name);//李四
      
      //
      function exchangeObjVal(obj){
        var temp = obj.num1;
        obj.num1 = obj.num2;
        obj.num2 = temp;
      }
      var obj1 = {
        num1: 10,
        num2: 20
      };
      exchangeObjVal(obj1);
      document.write('<hr>obj1.num1: ' + obj1.num1 + 'obj1.num2: ' + obj1.num2);
      
      //4.有参数，有返回值
      //两个数相减，返回结果
      function fn4(a,b){
        var min = a > b ? b : a;
        var max = a > b ? a : b;
        return max - min;
      }
      var rel = fn4(100,200);
      document.write('<hr>rel:' + rel);
      
      //函数之间可以互相调用
      function compare(num1,num2){
        return num1 > num2 ? num1 : num2;
      }
      document.write('<hr>两个数的最大值:' + compare(66,88));
      
      //比较三个数的最大值
      function compare3(num1,num2,num3){
//        var max2 = compare(num1,num2) > compare(num2,num3) ? compare(num1,num2) : compare(num2,num3);
        var max2 = compare(num1,num2);
        var max3 = compare(max2,num3);
//        return max2;
        return max3;
      }
      document.write('<hr>三个数的最大值:' + compare3(66,88,99));
      
      //比较四个数
      function compare4(num1,num2,num3,num4){
//        var max4 = compare3(num1,num2,num3);
//        var max5 = compare(max4,num4);
//        return max5;

//        return compare(compare(num1,num2),compare(num3,num4));

//        return compare3(compare(num1,num2),num3,num4);
        
        return compare(compare3(num1,num2,num3),num4);
      }
      document.write('<hr>四个数的最大值:' + compare4(66,88,99,100));
      
      //数组作为参数
      //写一个函数，参数是一个数组，求出数组中的最大值，最小值，和，平均值
      function computeArr(arr){
        var sum = 0,max = arr[0],min = arr[0],avg = 0;
        
        //遍历数组
        for(var i = 0; i < arr.length; i++){
          //最大值
          sum += arr[i];
          //最大值
          max = max > arr[i] ? max : arr[i];
          //最小值
          min = min < arr[i] ? min : arr[i];
        }
        //平均值
        avg = sum / arr.length;
        
        return [sum,max,min,avg];
      }
      document.write('和，最大值，最小值，平均值为：' + computeArr([1,2,3,4,5,5,6,7,99]));
      
      //封装随机数[x,y]
      function randomNumber(min,max){
        return parseInt(Math.random() * (max - min + 1) + min);
      }
      document.write('<hr>[min,max]随机数:' + randomNumber(20,50));
      
      //随机颜色
      function randomColor(){
        var r = randomNumber(0,255);
        var g = randomNumber(0,255);
        var b = randomNumber(0,255);
        var a = randomNumber(0,1);
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
      }
      
      var oDiv = document.getElementById("div1");
      oDiv.style.backgroundColor = randomColor();

      oDiv.style.height = randomNumber(10,500) + "px";
      oDiv.style.width = randomNumber(10,500) + "px";
      oDiv.style.borderRadius = randomNumber(0,100) + "px";
      console.log(oDiv.style.height);

      //给div添加点击事件
      oDiv.onclick = function(){
//        alert(11);
      oDiv.style.backgroundColor = randomColor();
      oDiv.style.height = randomNumber(10,500) + "px";
      oDiv.style.width = randomNumber(10,500) + "px";
      oDiv.style.borderRadius = randomNumber(0,100) + "px";
      };
      
      //函数指针
      //函数名就是函数指针(加上（）是调用函数)
      console.log(randomColor);
      
      function fn5(a,b){
        return a + b;
      }
      //fn5
      var fn6 = fn5;
//      alert(fn6(10,20));  

      //把函数指针作为参数
      function fn7(n1,n2,fn){
        var re = fn(n1,n2);
        console.log("结果" + re);
      }
      
      fn7(10,20,fn5);
      
      //函数回调
      function cook(afterFn){
        //结果完成以后
        afterFn();
      }
      function wait(){
        //alert('OK');
      }
      
      cook(wait);
      
      //匿名函数
      //没有函数名的函数
      
      /*
       function(){
        函数体
       }
       
       * */
      //匿名函数会返回函数指针，得到函数指针就可以执行函数
      var fn = function(){
        console.log("我是匿名函数");
      };
      //通过函数指针变量调用
      fn();
      
      //匿名函数自身调用
      (function(){
        console.log("自身调用的函数指针");
      })();
      //匿名函数传递参数
      (function(str){
        console.log("自身调用的函数指针" + str);
      })("0000000000");
      
      //
      function fn10(fn){
        //
        fn();
      }
      
      //匿名函数作为参数（匿名函数会返回函数指针，可以执行函数）
      fn10(function(){
        console.log("嵌套调用");
      });
      
      //递归算法（自身调用）
      //n * (n - 1) * (n - 2) ......* 2 * 1 n的阶乘
      //必须有结束条件
      function mul(n){
        if(n == 1)return 1;
        return n * mul(n-1);
      }
      mul(10);
      console.log(mul(3));
      
      //arguments: 保存所有参数
      function sum(){
        console.log(arguments);
        var sum = 0;
        for(var i = 0; i < arguments.length; i++){
          //alert(arguments[i]);
          sum += arguments[i];
        }
        return sum;
      }
      console.log(sum(10,20,30,40));
      
      
      //return:后面的代码不会被执行，函数结束
      
      function fn12(){
        return;//结束条件(return返回一个空，结束函数执行)
        console.log(11111);
        alert(1111);
        return 20000;
      }
      fn12();
      //alert(fn12());


            //字符串的常用属性
      //1.length
      var str = '中北大学';
      console.log(str.length);
      //str.aaa = 'zb';
      //console.log(str.aaa);//undefined
      console.log(str['length']); //4
      //console.log(str[length]);//中

      //字符串可以通过下标获取指定字符（下标从0开始）
      console.log(str[1]);
      for(var i = 0; i < str.length; i++) {
        console.log(str[i]);
      }

      /*
       字符串提取
       charAt()
       作用：获取字符串从指定位置的字符
       参数：1个，下标位置
       注：参数可以省略，默认获取第0个
       * */
      console.log(str.charAt()); //中

      /*
       2.获取指定位置字符的ASCII码
       charCodeAt()
       参数：1个，下标位置
       注：参数可以省略，默认获取第0个
       A-Z: 65-90
       a-z: 97-122
       
       * */

      console.log(str.charCodeAt(0)); //20013
      console.log("A".charCodeAt()); //65

      //对应的ASCII码值转换为字符
      console.log(String.fromCharCode(65)); //A

      /*
       字符串的提取
       substring()
       参数2个
       1：开始位置
       2：结束位置
       包含前面不包含后面
       
       如果只给第一个参数，默认从该位置截至到结尾
       自己会比较参数的大小，小的是开始位置
       负数或者非法字符都被解析为0
       * */

      var subS = str.substring(0, 2);
      console.log(subS); //中北
      console.log(str.substring(1, 3)); //北大
      console.log(str.substring(1)); //北大学
      console.log(str.substring(3, 1)); //北大
      console.log(str.substring(-1, 2)); //中北

      /*
       substr()
       从指定位置，提取固定长度的字串
       参数2个
       1:开始位置
       2：提取的长度
       
       负数代表倒数： -1 == 最后一个
       * */
      //中北大学
      console.log(str.substr(0, 2)); //中北
      console.log(str.substr(-3, 2)); //北大

      /*
       sclice()
       参数2个
       1: 开始位置
       2：结束位置
       
       参数可以为负数
       一个参数默认从该位置提取到结尾
       不会比较两个参数的大小
       * */

      console.log(str.slice(0, 2)); //中北
      console.log(str.slice(-4, 2)); //中北
      console.log(str.slice(1)); //北大学
      console.log(str.slice(-4, -2)); //中北
      console.log(str.slice(2, 0)); //空串

      //字符串的比较
      //是依次比较字符串对应位置的ASCII码值，得出结论后结束
      var zhongStr = 'bbcde';
      var zhongStr2 = 'abcdf';
      if(zhongStr < zhongStr2) {
        console.log("max2" + zhongStr2);
      } else {
        console.log("max" + zhongStr);
      }

      //字符串转化
      var str2 = 'hello zhong bei';
      //toUpperCase小写变大写
      console.log(str2.toUpperCase()); //HELLO ZHONG BEI
      //toLowerCase大写变小写
      str2 = 'HELLO ZHONG BEI'
      console.log(str2.toLowerCase()); //hello zhong bei

      //字符串分割
      /*
       split: 把字符串分割为数组
       参数2个
       1.指定分隔符
       2.可选，限制数组个数
       
       注意：
       1.分割符字符串中没有，会把整个字符串作为数组中的元素
       2.以空字符串分割，会把字符串中的每一个字符都存入数组
       * */
      var splStr = 'a|b|c|d';
      var reArr = splStr.split('|');
      console.log(reArr); //["a", "b", "c", "d"]
      //限制数组个数
      var reArr2 = splStr.split('|', 2);
      console.log(reArr2); //["a", "b"]

      var reArr3 = splStr.split('f');
      console.log(reArr3); //["a|b|c|d"]

      var reArr4 = splStr.split('');
      console.log(reArr4); //["a", "|", "b", "|", "c", "|", "d"]

      //字符串合并
      //concat()
      //参数一个或者多个

      var conStr1 = '张三';
      var conStr2 = '是个';
      var conStr3 = '东西';

      var result = conStr1.concat(conStr2, conStr3);
      console.log(result); //张三是个东西

      /*
       字符串检索
       indexOf()
       参数2个：返回值：该字符对应的位置
       1.（必须传）要检索的字符
       2.指定开始查找的位置
       * */

      var str = 'hello world hello';
      console.log(str.indexOf('l')); //2:最近的一个
      console.log(str.indexOf('L')); //-1:没有找到

      console.log(str.indexOf('world')); //6

      console.log(str.indexOf('l', 3)); //3

      console.log(str.indexOf('l', 4)); //9

      //找到所有的h,保存到数组
      var arr = []; //保存找到值
      var index = 0; //默认从0开始查找
      while(str.indexOf('h', index) != -1) {
        var resultIndex = str.indexOf('h', index);
        //保存到数组
        arr.push(resultIndex);

        //index变化，从下一个位置查找
        index = resultIndex + 1;
      }
      //console.log(arr);//[0, 12]

      //查找字符串 'world'
      var arr = []; //保存找到值
      var index = 0; //默认从0开始查找
      var searchStr = 'world';
      while(str.indexOf(searchStr, index) != -1) {
        var resultIndex = str.indexOf(searchStr, index);
        //保存到数组
        arr.push(resultIndex);

        //index变化，从下一个位置查找
        index = resultIndex + searchStr.length;
      }
      console.log(arr); //[6]

      //封装函数
      function indexsOf(sourceStr, searchStr) {
        var arr = []; //保存找到值
        var index = 0; //默认从0开始查找
        while(sourceStr.indexOf(searchStr, index) != -1) {
          var resultIndex = sourceStr.indexOf(searchStr, index);
          //保存到数组
          arr.push(resultIndex);

          //index变化，从下一个位置查找
          index = resultIndex + searchStr.length;
        }
        return arr;
      }
      console.log(indexsOf(str,'world'));
      
      
      //lastIndexOf(): 从后面查找
      var str = 'abbcbbba';
      console.log(str.lastIndexOf('a'));//7
      console.log(str.lastIndexOf('a',5));//0


          /*
      1.push:向数组尾部添加元素
      参数：一个或者多个
      返回值：新数组的长度
      * */
      var arr = [1, 2, 4, 5];
      var newLen = arr.push(6, 7);
      console.log('arr:' + arr + 'arr.lenght' + newLen);

      /*
       2.unshift:向数组的头部添加元素
       参数： 多个
       返回值：新的数组长度
       
       * */

      var arr2 = ['是', '一个', '大帅哥'];
      var len = arr2.unshift('张三');
      console.log('arr2:' + arr2 + 'length:' + len);

      /*
       pop():从数组的尾部删除一个元素
       参数：无
       返回值：被删除的元素
       
       * */
      var arr3 = [1, 3, 5, 7, 9];
      arr3.pop();
      arr3.pop();
      var delEle = arr3.pop();
      console.log(arr3, delEle);

      /*
       shift():从数组的头部删除一个元素
       参数：无
       返回值：被删除的元素
       
       * */
      var arr4 = ['石头', '是', '一个', '大帅哥'];
      var headDelEle = arr4.shift();
      console.log(arr4, headDelEle);

      /*
       5.slice() 返回选定的元素（包含开头，不包含结尾）
       参数1：开始的位置
       参数2：结束的位置
       参数可以为负数
       
       只传参数1，从该位置截取到最后
       
       * */
      var arr5 = [5, 7, 9, 10];
      console.log(arr5.slice(0, 3)); //[5,7,9]
      console.log(arr5.slice(1)); //[7, 9, 10]

      /*
       splice():从数组中任意位置：删除或者插入任意个元素
       返回值：被删除元素组成的数组
       
       参数：任意个
       
       常用：
       第一个参数：指定开始的位置
       第二个参数：指定删除的长度
       从第三个参数开始：指定要插入的元素
       
       如果只给一个参数，从该位置删除到最后
       
       * */

      var arr6 = ['石头', '张三', '是', '一对', '好朋友'];
      var delEle = arr6.splice(3, 2);
      console.log(arr6, delEle);

      var arr6 = ['石头', '张三', '是', '一对', '好朋友'];
      var delEle = arr6.splice(3, 2, '一对', '好基友'); //["石头", "张三", "是", "一对", "好基友"]
      console.log(arr6, delEle);

      //只添加，不删除
      var arr6 = ['石头', '张三', '是', '一对', '好朋友'];
      arr6.splice(1, 0, '李四');
      console.log(arr6);

      var arr6 = ['石头', '张三', '是', '一对', '好朋友'];
      arr6.splice(2);
      console.log(arr6);

      /*
       join()
       数组中元素合并为字符串
       参数一个：连接符
       
       返回值：字符串
       
       注意：参数不传情况
       默认逗号隔开
       * */
      var arr7 = [1, 4, 5, 9];
      var relStr = arr7.join('-');
      console.log(relStr);

      var arr7 = [1, 4, 5, 9];
      var relStr = arr7.join();
      console.log(relStr); //1,4,5,9

      /*
       数组的合并
       concat()
       参数一个或者多个
       
       返回一个新的数组(对操作数组（原数组）没有影响)
       * */
      var conArr1 = [1, 2, 3];
      var conArr2 = [4, 5, 6];
      var conArr3 = [7, 8, 9];

      var newConArr = conArr1.concat(conArr2, conArr3);
      console.log(newConArr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
      newConArr = newConArr.concat(10, 11, 12);
      console.log(newConArr); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

      //利用concat返回新的数组特性可以实现对数组的copy
      //alert(typeof conArr1);

      var nums1 = [1, 2, 3];
      //多了一个nums2的指针变量引用数组
      var nums2 = nums1;
      nums2.push(4);
      //nums1?
      console.log(nums1); //[1, 2, 3, 4]

      //解决办法： concat copy一份
      var copArr1 = [1, 2, 3];
      //copy一份新的数组
      var copArr2 = copArr1.concat();
      copArr2.push(4, 5, 6);
      console.log(copArr1, copArr2); //[1, 2, 3] [1, 2, 3, 4, 5, 6]

      /*
       sort()：排序
       改变原始数组
       
       参数：一个，可选：传的话只能传递一个函数类型参数
       
       参数不传的话默认从小到大排序
       
       * */

      var sortArr = ['b', 'a', 'd', 'z', 'mam', 'mbm'];
      sortArr.sort();
      console.log(sortArr); //["a", "b", "d", "gg", "mm", "z"]

      //问题
      var sortNumArr = [4, 3, 8, 1, 10, 7];
      sortNumArr.sort();
      console.log(sortNumArr); //[1, 10, 3, 4, 7, 8]

      /*
       自定义函数：形参：两个
       返回值：必须是number类型
       
       当返回值是正数的时候，就交换两个数的位置
       当返回值是负数的时候，不交换
       0的时候也不交换
       
       return n1 - n2 的时候：就是一个从小到大的排序
       
       return n2 - n1 的时候：就是一个从大到小的排序
       * */

      //从小到大
      function up(n1, n2) {
        return n1 - n2;
      }
      //从大到小
      function down(n1, n2) {
        return n2 - n1;
      }
      sortNumArr.sort(up);
      console.log(sortNumArr); //[1, 3, 4, 7, 8, 10]
      sortNumArr.sort(down);
      console.log(sortNumArr); //[10, 8, 7, 4, 3, 1]

      //变量接受函数指针
      var va = function(n1, n2) {
        return n1 - n2;
      }
      sortNumArr.sort(va);
      console.log(sortNumArr);

      //匿名函数
      sortNumArr.sort(function(n1, n2) {
        return n1 - n2;
      });
      console.log(sortNumArr); //[1, 3, 4, 7, 8, 10]

      /*
       some()
       检测数组元素中是否有元素符合指定的条件
       
       参数：函数指针
       
       不改变原始数组
       */
      var soArr = [1, 2, 5, 9, 0];
      //判断数组中是否有大于8的数字，有的话返回true，没有的话返回false
      var rel = soArr.some(function(pra) {
        return pra > 8;
      });
      console.log(rel);

      var rel = soArr.some(function(pra) {
        return pra == 9;
      });
      console.log(rel);

      /*
       every():所有元素必须全部满足才返回true，否则false
       * */
      var eveArr = [1, 3, 5, 7, 9, 0];
      var rel = eveArr.every(function(pra) {
        return pra >= 0;
      });
      console.log(rel); //true

      /*
       filter():返回数组中的满足回调函数中指定的条件的元素
       
       * */
      // Define a callback function. 
      function CheckIfPrime(value, index, ar) {
        high = Math.floor(Math.sqrt(value)) + 1;

        for(var div = 2; div <= high; div++) {
          if(value % div == 0) {
            return false;
          }
        }
        return true;
      }

      // Create the original array. 
      var numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53];

      // Get the prime numbers that are in the original array.  
      var primes = numbers.filter(CheckIfPrime);

      document.write(primes);
      // Output: 31,37,41,43,47,53


            //1.通过id:getElementById
      //通过id:标准方法
      //调用的对象只能是document
      var oDiv = document.getElementById("box");
      oDiv.style.border = '5px solid black';
      
      //2.直接通过id的名字
      //不是标准方法，推荐第一种方式
      //box.style.border = '5px solid red';
      
      //3.通过class找到元素
      //返回的是数组
      //如果通过document调用，找到的是所有叫做inner的元素
      //也可以通过其他文档对象调用
      var inners = document.getElementsByClassName("inner");
      inners[3].style.color = "red";
      console.log(inners.length);//4
      
      var boxInners = box.getElementsByClassName("inner");
      console.log(boxInners.length);//3
      
      //4.通过标签
      //返回的是数组
      //如果通过document调用，找到的是所有叫做a的元素
      //也可以通过其他文档对象调用，返回的是该对象下叫做a的标签
      var links = document.getElementsByTagName("a");
      links[2].style.color = "red";
      
      var boxLinks = box.getElementsByTagName("a");
      boxLinks[1].style.color = "red";
      
      //5.querySelector()
      //通过选择器去查找对象
      //返回的是单个对象
      //如果该选择器下多个对象，默认第一个
      
      var inner = document.querySelector(".inner");
      //inner.style.border = '10px solid black';
      
      var linkFirst = document.querySelector("#box > a");
      linkFirst.style.color = 'yellow';
      
      //querySelectorAll:找到所有该选择器的元素
      //返回类型数组
      var links = document.querySelectorAll("#box a");
      links[1].style.color = "black";


            console.log(window);
      console.log(this);
      //this: 指当前对象，script下this是window
      console.log(this.document);
      
      //函数中的this也是window
      function fn(){
        console.log(this);
      }
      fn();
      
      this.aa = 100;
      console.log(window.aa);//100
      //添加点击事件
      var oDiv = document.querySelector('#div1');
      oDiv.onclick = function(){
        //此时的this是绑定该方法的元素对象
        console.log(this);
        this.style.backgroundColor = 'blue';
      };
      
      
      //获取li
      var navs = document.querySelectorAll("li");
      var preLi = navs[0];//默认第一个选中
      //遍历绑定事件
      for(var i = 0; i < navs.length; i++){
        //console.log(navs[i]);
        navs[i].onclick = function(){
          //alert(111);
          //navs[i].style.backgroundColor = "red";
          //alert(this.innerText);
//          for(var j = 0; j < navs.length; j++){
//            navs[j].style.backgroundColor = "greenyellow";
//          }
          //上次点击的恢复颜色
          preLi.style.backgroundColor = "greenyellow";
          //当前
          this.style.backgroundColor = "red";
          //保存当前是选中状态的li
          preLi = this;
        };
      }


      
}

/*

DOM:
docu
ment object model:文档对象模型

2.DOM树：文档解析完成后，浏览器把文档中的元素，转化成一种树形结构（一个个的结点组成）

document->html body->div->ul->li
         head->title
         

3.DOM提供了一些常用的属性和方法，可以对文档中的元素，访问和更改（增加元素，删除元素，替换元素）

//查找：
document.getElementById
docuemnt.getElementsTagName
document.getElementsClassName
document.getElementsByName:通过表单元素的name属性

//h5不兼容ie6-8
document.querySelector
document.querySelectorAll

//关系查找
文档树关系查找
children:子节点
parentNode:父结点
nextSibling:下兄弟结点

节点：页面中所有内容的一个分类
1.元素节点 <div> <span>....
2.文本节点 'hello world'
3.属性节点 id class name src....
4.注释节点 <!--注释-->
5.根节点 document
6.声明节点 

      nodeType  nodeName  nodeValue
元素节点：   1      "DIV"(元素名) null
属性节点：   2   "属性名"   "属性值"
文本节点:   3   "#text"   "文本内容"
注释节点:   8   "comment" "注释内容"
根节点:      9   "#document"   null 
声明节点      10     "html"     null


*/