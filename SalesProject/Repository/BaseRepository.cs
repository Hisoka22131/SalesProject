using Microsoft.EntityFrameworkCore;
using SalesProject.Context;
using SalesProject.Models;
namespace SalesProject.Repository
{
    public class BaseRepository<TEntity> where TEntity : EntityBase
    {
        private readonly ApplicationContext _context;
        private DbSet<TEntity> _dbSet;

        public BaseRepository(ApplicationContext context)
        {
            this._context = context;
            this._dbSet = context.Set<TEntity>();
        }

        public void AddEntity(TEntity entity)
        {
            _dbSet.Add(entity);
        }

        public void RemoveEntity(object id)
        {
            TEntity? entity = _dbSet.Find(id);
            if (entity != null)
                RemoveEntity(entity);
        }

        public void RemoveEntity(TEntity entity)
        {
            if (_context.Entry(entity).State == EntityState.Detached)
            {
                _dbSet.Attach(entity);
            }
            _dbSet.Remove(entity);
        }

        public void UpdateEntity(TEntity entity)
        {
            _dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public TE? GetEntity<TE>(int? id) where TE : EntityBase
        {
            return _context.Find<TE>(id);
        }

        public IEnumerable<TEntity> GetEntities()
        {
            return _dbSet.ToList();
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
