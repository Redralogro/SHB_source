using System;
using System.Collections.Generic;
namespace Dev
{
    class Program
    {
        static void Main(string[] args){
        // {   int i ;
        //     int j;

        //     Console.Write("Enter First Name:");
        //          i = Int16.Parse(Console.ReadLine());
        //     Console.Write(i);
        Ioc test ;
        test = Factory.getObject();
        test.Main();
        }
        // static void Main(string[] args){
        // // {   int i ;
        // //     int j;

        // //     Console.Write("Enter First Name:");
        // //          i = Int16.Parse(Console.ReadLine());
        // //     Console.Write(i);
        // Ioc test = new Ioc();
        // test.Main();
        //}
    }
    public class Factory {
        public static Ioc getObject(){
            return  new Ioc();
        }
    }
}
