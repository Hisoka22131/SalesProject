using SalesProject.Models;

namespace SalesProject.Repository
{
    public interface IRepository<TEntity> where TEntity : EntityBase
    {
        public TEntity Insert(TEntity entity);
        public void Insert(params TEntity[] entities);
        public void Insert(IEnumerable<TEntity> entities);
        public void Remove(int? id);
        public void Remove(TEntity entity);
        public void Remove(params TEntity[] entities);
        public void Remove(IEnumerable<TEntity> entities);
        public void Update(TEntity entity);
        public void Update(IEnumerable<TEntity> entities);
        public void Update(params TEntity[] entities);
        public TE? GetEntity<TE>(int? id) where TE : EntityBase;
        public IEnumerable<TEntity> GetEntities();
    }
}
