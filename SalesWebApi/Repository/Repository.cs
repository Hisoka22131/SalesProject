using Microsoft.EntityFrameworkCore;
using SalesWebApi.Context;
using SalesWebApi.Models;
using System.Reflection;

namespace SalesWebApi.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : EntityBase
    {
        protected readonly DbContext _context;
        protected DbSet<TEntity> _dbSet => _context.Set<TEntity>();
        public Repository(DbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public virtual TEntity Insert(TEntity entity)
        {
            return _dbSet.Add(entity).Entity;
        }

        public virtual void Insert(params TEntity[] entities) => _dbSet.AddRange(entities);

        public virtual void Insert(IEnumerable<TEntity> entities) => _dbSet.AddRange(entities);

        public virtual void Remove(int? id)
        {
            var typeInfo = typeof(TEntity).GetTypeInfo();
            var key = _context.Model.FindEntityType(typeInfo).FindPrimaryKey().Properties.FirstOrDefault();
            var property = typeInfo.GetProperty(key?.Name);
            if (property != null)
            {
                var entity = Activator.CreateInstance<TEntity>();
                property.SetValue(entity, id);
                _context.Entry(entity).State = EntityState.Deleted;
            }
            else
            {
                var entity = _dbSet.Find(id);
                if (entity != null)
                {
                    Remove(entity);
                }
            }
        }

        public virtual void Remove(TEntity entity) => _dbSet.Remove(entity);

        public virtual void Remove(params TEntity[] entities) => _dbSet.RemoveRange(entities);

        public virtual void Remove(IEnumerable<TEntity> entities) => _dbSet.RemoveRange(entities);

        public virtual void Update(TEntity entity)
        {
            _dbSet.Update(entity);
        }

        public virtual void Update(IEnumerable<TEntity> entities) => _dbSet.UpdateRange(entities);

        public virtual void Update(params TEntity[] entities) => _dbSet.UpdateRange(entities);

        public virtual TE? GetEntity<TE>(int? id) where TE : EntityBase
        {
            return _context.Find<TE>(id);
        }

        public virtual IEnumerable<TEntity> GetEntities()
        {
            return _dbSet.ToList();
        }

        public virtual void Save()
        {
            _context.SaveChanges();
        }
    }
}
