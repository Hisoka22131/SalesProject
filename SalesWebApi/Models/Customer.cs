namespace SalesWebApi.Models
{
    public class Customer : EntityBase
    {
        public virtual string? FirstName { get; set; }
        public virtual string? LastName { get; set; }
        public virtual string? City { get; set; }
        public virtual string? Country { get; set; }
        public virtual string? Phone { get; set; }
        public virtual IEnumerable<Order> Orders { get; set; } = new List<Order>();
        public virtual string? FullName => FirstName + " " + LastName;
    }
}
