using System;
using System.Collections.Generic;
using System.Text;
namespace Dev
{
    class Program
    {
       static void Main(string[] args){
        Console.OutputEncoding = Encoding.UTF8;
        //Constructor_injection
        Provider provider = new Provider();
        var Name = provider.CustomerName(1);
        Console.WriteLine(Name);
        //Property_injection
        Coordinator controller = new Coordinator();
        var customerName = controller.CustomerName(1);
        Console.WriteLine(customerName);
        }
    }
}
