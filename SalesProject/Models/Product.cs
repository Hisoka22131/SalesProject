namespace SalesProject.Models
{
    public class Product : EntityBase
    {
        public override int Id { get; set; }
        public string? ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
        public string? Package { get; set; }
        public bool? IsDiscontinued { get; set; }
        public virtual Supplier? Supplier { get; set; }
        public virtual IEnumerable<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
