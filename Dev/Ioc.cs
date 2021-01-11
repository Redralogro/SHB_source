using System;
using System.Collections.Generic;

namespace Dev
{
public class CustomerBusinessLogic
{
    public DataAccess _dataAccess;

    public CustomerBusinessLogic()
    {
        _dataAccess = new DataAccess();
    }

    public string GetCustomerName(int id)
    {
        _dataAccess = new DataAccess();
        return _dataAccess.GetCustomerName(id);
    }
}
public class DataAccess
{
    public DataAccess()
    {
    }

    public string GetCustomerName(int id) {
        return "Dummy Customer Name " + id; // get it from DB in real app
    }
}
}
