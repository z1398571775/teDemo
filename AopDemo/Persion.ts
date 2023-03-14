class Persion{
    /***
     * 姓名
     */
    name:string;
    /***
     * 年龄
     */
    age:number;

    constructor(name:string,age:number){
        this.age = age;
        this.name = name;
    }

    get persionName(){
        return this.name;
    }

    set persionName(name:string){
        this.name = name;
    }

    doSleep(_name:string,_age:number){
        console.log(`${_age}岁的${_name},睡觉了.........`);
    }
}

export{Persion}