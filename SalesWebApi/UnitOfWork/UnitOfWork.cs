using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using SalesWebApi.Models;
using SalesWebApi.Repository;

namespace SalesWebApi.UnitOfWork
{
    public class UnitOfWork<TContext> : IUnitOfWork where TContext : DbContext
    {
        private bool disposed = false;
        private Dictionary<Type, object> repositories;

        public UnitOfWork(TContext context)
        {
            DbContext = context ?? throw new ArgumentNullException(nameof(context));
        }

        public TContext DbContext { get; }

        public IRepository<TEntity> GetRepository<TEntity>(bool hasCustomRepository = false) where TEntity : EntityBase
        {
            if (repositories == null)
            {
                repositories = new Dictionary<Type, object>();
            }

            // what's the best way to support custom reposity?
            if (hasCustomRepository)
            {
                var customRepo = DbContext.GetService<IRepository<TEntity>>();
                if (customRepo != null)
                {
                    return customRepo;
                }
            }

            var type = typeof(TEntity);
            if (!repositories.ContainsKey(type))
            {
                repositories[type] = new Repository<TEntity>(DbContext);
            }

            return (IRepository<TEntity>)repositories[type];
        }

        public int SaveChanges(bool ensureAutoHistory = false)
        {
            return DbContext.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);

            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    // clear repositories
                    if (repositories != null)
                    {
                        repositories.Clear();
                    }

                    // dispose the db context.
                    DbContext.Dispose();
                }
            }

            disposed = true;
        }
    }
}
