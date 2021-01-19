using System;
using System.Collections.Generic;
using System.Text;
namespace Dev
{
    class Program
    {
       static void Main(string[] args){
        Console.OutputEncoding = Encoding.UTF8;
        Provider provider = new Provider();
        var Name = provider.CustomerName(1);
        Console.WriteLine(Name);
        }
    }
}
