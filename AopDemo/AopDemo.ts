import { Persion } from "./Persion";

/**
 * 插入片段
 * @param className 类名
 * @param functionName 拦截的方法名
 * @param beforefunction 方法执行前的方法
 * @param afterfunction 方法执行后的方法
 */
function aopCore(className: any, functionName: string, beforefunction: Function|null, afterfunction: Function|null):Function {
    //拦截方法实例
    const instancemethod = Object.getOwnPropertyDescriptor(className.prototype, functionName);
    //保存原有的方法
    const oldmethod = instancemethod!.value;
    //拦截并执行拦截后要执行的代码
    return instancemethod!.value = function(...rest:any[]){
        console.log("开始");
        if(beforefunction != null){
            beforefunction(rest);
        } 
        
        oldmethod.apply(this,rest);
        if(afterfunction != null){
            afterfunction(rest);
        } 
        console.log("结束");
    }

}
//拦截前的方法
function beforefunction(rest:any[]){
    rest[0] = "李四";
    console.log("开始执行拦截前的代码")
}
const resultFunction = aopCore(Persion,"doSleep",beforefunction,null);
resultFunction("王五",40);