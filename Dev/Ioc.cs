using System;
using System.Collections.Generic;

namespace Dev
{
   public interface ICustomerDataAccess
{
    string GetCustomerName(int id);
}

public class CustomerDataAccess: ICustomerDataAccess
{
    public CustomerDataAccess() {
    }

    public string GetCustomerName(int id) {
        return "Ahihi";        
    }
}
    public class CustomerBusinessLogic
    {
        ICustomerDataAccess _custDataAccess;

        public CustomerBusinessLogic(ICustomerDataAccess custDataAccess )
        {
            _custDataAccess = custDataAccess;
        }
        public CustomerBusinessLogic()
        {
            _custDataAccess = new CustomerDataAccess();
        }
        public string ProcessCustomerData(int id)
        {
            return _custDataAccess.GetCustomerName(id);
        }
    }
    public class CustomerService
{
    CustomerBusinessLogic _customerBL;

    public CustomerService()
    {
        _customerBL = new CustomerBusinessLogic(new CustomerDataAccess());
    }

    public string GetCustomerName(int id) {
        return _customerBL.ProcessCustomerData(id);
    }
}
}
