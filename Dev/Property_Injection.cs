using System;
using System.Collections.Generic;

namespace Dev
{
    public class Customer_property {
        public Customer_property() {
            
        }
        public string GetCustomer (int i)
        {
            return dataAccess.GetCustomerName(i);
        }
        public IGetName dataAccess;
    } 
    public class Coordinator {
        Customer_property customer;
        public Coordinator()
        {
            customer = new Customer_property();
            customer.dataAccess = new Service();
        }
        public string CustomerName(int i){
            return customer.GetCustomer(i);
        }
    }
}
