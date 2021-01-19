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
    public class Customer {
        IGetName _service;
        public Customer() {
            _service = new Service();
        }
        public Customer(IGetName getname) {
            _service = getname ;
        }
        public string GetCustomer (int i)
        {
            return _service.GetCustomerName(i);
        }
    } 
    public class Provider {
        Customer _customer;
        public Provider()
        {
            _customer = new Customer(new Service());
        }
        public string CustomerName(int i){
            return _customer.GetCustomer(i);
        }
    }
}
