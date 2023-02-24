using SalesProject.Models;

namespace SalesProject.Dto.CustomerDto
{
    public class CustomerListDto
    {
        public IEnumerable<Customer> Customers { get; set; } = new List<Customer>();

        public CustomerListDto(IEnumerable<Customer> customers)
        {
            this.Customers = customers;
        }
    }

}
