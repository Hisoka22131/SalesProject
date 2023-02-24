namespace SalesWebApi.Models
{
    public class Order:EntityBase
    {
        public DateTime? OrderDate { get; set; }
        public string? OrderNumber { get; set; }
        public decimal? TotalAmount { get; set; }
        public virtual Customer? Customer { get; set; }
        public virtual IEnumerable<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
