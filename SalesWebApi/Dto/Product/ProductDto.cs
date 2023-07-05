namespace SalesWebApi.Dto.Product;

public class ProductDto : EntityDto
{
    public string? ProductName { get; set; }
    public decimal? UnitPrice { get; set; }
    public string? Package { get; set; }
    public bool? IsDiscontinued { get; set; }   
}