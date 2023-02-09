using Microsoft.EntityFrameworkCore;
using SalesProject.Context;

namespace SalesProject
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<ApplicationContext>>()))
            {
                // Look for any movies.
                if (context.Customer.Any())
                {
                    return;   // DB has been seeded
                }

                if (context.Supplier.Any())
                {
                    return;   // DB has been seeded
                }

                if (context.Order.Any())
                {
                    return;   // DB has been seeded
                }

                if (context.OrderItem.Any())
                {
                    return;   // DB has been seeded
                }

                if (context.Product.Any())
                {
                    return;   // DB has been seeded
                }
            }
        }
    }
}
