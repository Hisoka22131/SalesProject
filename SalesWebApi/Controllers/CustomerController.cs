using Microsoft.AspNetCore.Mvc;
using SalesWebApi.Dto.Customer;
using SalesWebApi.Models;
using SalesWebApi.UnitOfWork;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SalesWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;

        private readonly IUnitOfWork _unitOfWork;

        public CustomerController(ILogger<WeatherForecastController> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public List<CustomerDto> Get()
        {
            return _unitOfWork.GetRepository<Customer>()
                .GetEntities()
                .Select(entity => new CustomerDto
                {
                    Id = entity.Id,
                    FullName = entity.FullName,
                    City = entity.City,
                    Country = entity.Country,
                    Phone = entity.Phone,
                    OrdersCount = entity.Orders.Count()
                })
                .ToList();
        }

        [HttpPost]
        public void CreateCustomer(CustomerDto customerDto)
        {
            
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
