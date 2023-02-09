using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalesProject.Context;
using SalesProject.Models;
using SalesProject.Repository;
using System.Diagnostics;


namespace SalesProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private static  ApplicationContext _applicationContext;
        private static  BaseRepository<Customer> baseRepository = new BaseRepository<Customer>(_applicationContext);
        public HomeController(ILogger<HomeController> logger, ApplicationContext context)
        {
            _logger = logger;
            _applicationContext = context;
        }

        public IActionResult Index()
        {
            GetCustomerOrders();
            return View();
        }

        public IActionResult Privacy()
        {

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        /// <summary>
        /// Выводим все заказы заказчика
        /// </summary>
        private static void GetCustomerOrders()
        {
            var a = baseRepository.GetEntities();
            var customers = baseRepository.GetEntities().ToList().Select(q => new { Id = q.Id, Name = q.FirstName + " " + q.LastName, Orders = q.Orders });
            foreach (var customer in customers)
            {
                Console.WriteLine(customer.Id + " " + customer.Name + ":");
                foreach (var order in customer.Orders)
                {
                    Console.WriteLine($"{order.OrderNumber}");
                }
            }
        }
    }
}