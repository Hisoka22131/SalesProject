using Microsoft.AspNetCore.Mvc;
using SalesWebApi.Dto.Product;
using SalesWebApi.Models;
using SalesWebApi.UnitOfWork;

namespace SalesWebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;

    private readonly IUnitOfWork _unitOfWork;
    
    public ProductController(ILogger<ProductController> logger, IUnitOfWork unitOfWork)
    {
        _logger = logger;
        _unitOfWork = unitOfWork;
    }

    [HttpGet]
    public IEnumerable<ProductDto> GetProducts()
    {
        return _unitOfWork.GetRepository<Product>()
            .GetEntities().Select(p => new ProductDto()
            {
                Id = p.Id,
                ProductName = p.ProductName,
                UnitPrice = p.UnitPrice,
                Package = p.Package,
                IsDiscontinued = p.IsDiscontinued
            });
    }

    [HttpPost]
    [Route("CreateProduct")]
    public void CreateProduct(ProductDto dto)
    {
        if (dto == null)
            return;
        
    }
}