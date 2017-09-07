
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
      
}

/*

DOM:
document object model:文档对象模型

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