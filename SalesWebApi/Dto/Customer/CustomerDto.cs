namespace SalesWebApi.Dto.Customer
{
    public class CustomerDto : EntityDto
    {
        public string? FullName { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public string? Phone { get; set; }
        public int? OrdersCount { get; set; }
    }
}
