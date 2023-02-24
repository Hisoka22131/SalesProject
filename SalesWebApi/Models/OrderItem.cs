namespace SalesWebApi.Models
{
    public class OrderItem : EntityBase
    {
        public decimal? UnitPrice { get; set; }
        public int? Quantity { get; set; }
        public virtual Order? Order { get; set; }
        public virtual Product? Product { get; set; }
    }
}
