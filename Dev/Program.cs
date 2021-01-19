using System;
using System.Collections.Generic;
namespace Dev
{
    class Program
    {
        static void Main(string[] args){
        CustomerService service = new CustomerService();
        var customer = service.GetCustomerName(1);
        Console.WriteLine(customer);
        }
    }
}
