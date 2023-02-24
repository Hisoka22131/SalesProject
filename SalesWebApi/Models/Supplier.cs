namespace SalesWebApi.Models
{
    public class Supplier : EntityBase
    {
        public string? CompanyName { get; set; }
        public string? ContactName { get; set; }
        public string? ContactTitle { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public string? Phone { get; set; }
        public string? Fax { get; set; }
        public virtual IEnumerable<Product> Products { get; set; } = new List<Product>();
    }
}
