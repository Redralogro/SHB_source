using System;
using System.Collections.Generic;

namespace Dev
{
 public interface IGetName {
     string GetCustomerName(int i);
 }
 public class Service : IGetName {
    public Service() {

    }
    public string GetCustomerName (int i)
    {
        return "Vũ Đức Long";
    }
    }
}
