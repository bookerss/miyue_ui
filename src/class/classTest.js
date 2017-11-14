
/*
 * 类的学习
 *  
 */
class Test {
   
   constructor(name) {
    //    TODO:supe()的意义
    // super() 只在继承的情况下使用
        this.name = 'ffff';
       
   }
//  TODO: 类属性的定义
   
// 
    _test1(){
     console.log('test1',this.name)
    }

   
}
class Test2 extends Test {
   
   constructor(name,g) {
    //    TODO:supe()的意义
    super() 
        this.g = g;
        this.name = 'ggg'
       
   }
//  TODO: 类属性的定义
   
// 
    _test(){
     console.log('test',this.g,this.name)
     this._test1()
    }

   
}



export default Test2