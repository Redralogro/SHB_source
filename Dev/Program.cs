using System;
using System.Collections.Generic;
namespace Dev
{
    class Program
    {
        static void Main(string[] args){
        IocLogic action = new IocLogic();
        Console.WriteLine(action.getName());
        }
    }
}
