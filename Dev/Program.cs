using System;
using System.Collections.Generic;
namespace Dev
{
    class Program
    {
        static void Main(string[] args){
        CustomerBusinessLogic customerLogic = new CustomerBusinessLogic();
        var customerLogicName = customerLogic.GetCustomerName(2);
        Console.WriteLine(customerLogicName);
        }
    }
}
