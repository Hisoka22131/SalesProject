using Microsoft.EntityFrameworkCore;
using SalesWebApi.Models;
using SalesWebApi.Repository;
using SalesWebApi.UnitOfWork;

namespace SalesWebApi
{
    public static class ServiceProviderExtensions
    {
        public static IServiceCollection AddUnitOfWork<TContext>(this IServiceCollection services) where TContext : DbContext
        {
            services.AddScoped<IUnitOfWork, UnitOfWork<TContext>>();
            return services;
        }

        public static IServiceCollection AddCustomRepository<TEntity, TRepository>(this IServiceCollection services)
                 where TEntity : EntityBase
                 where TRepository : class, IRepository<TEntity>
        {
            services.AddScoped<IRepository<TEntity>, TRepository>();
            return services;
        }
    }
}
