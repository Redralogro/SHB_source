using System;
using System.Collections.Generic;
namespace Dev
{
    class Program
    {
        static void Main(string[] args){
          CustomerBusinessLogic customerLogic = new CustomerBusinessLogic() ;
          customerLogic._dataAccess = new DataAccess();
          var customer = customerLogic._dataAccess;
          Console.WriteLine(customer.GetCustomerName(2));
          
        }
        //  public class Factory {
        //     public static Ioc getObject(){
        //         return  new Ioc();
        //     }
        // }
    }
}
