using System;
using System.Collections.Generic;

namespace Dev
{
    public class IocLogic
    {
      
       IocAccess test = Factory.getObject();
        public string getName(){
            return test.Main();
        }
    }
    public class IocAccess 
    {
        public string Main(){
           return "HÚ le";
       }  
    }
    public class Factory {
        public static IocAccess getObject(){
            return  new IocAccess();
        }
    }
}
