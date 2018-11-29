using Microsoft.EntityFrameworkCore;
using System.Web;
using System;
using Blog.Entities;
using System.Linq;

namespace Blog.Services

{
     public class DataContext : DbContext
     {
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

    }
}
        
        // public string currentUsername => User.Identity;
        // public override int SaveChanges()
        //   {
        //       AddTimestamps();
        //       return base.SaveChanges();
        //   }

        //   private void AddTimestamps()
        //   {
        //       var entities = ChangeTracker.Entries().Where(x => x.Entity is BaseEntity && (x.State == EntityState.Added || x.State == EntityState.Modified));
        //     //var user = User.FindFirst(ClaimTypes.NameIdentifier).Value;
        //     //var currentUsername = await _userManager.GetUserAsync(HttpContext.User);
        //     //var currentUsername = !string.IsNullOrEmpty(System.Web.HttpContext.Current?.User?.Identity?.Name)
        //     //? HttpContext.Current.User.Identity.Name
        //     //: "Anonymous";

        //     foreach (var entity in entities)
        //       {
        //           if (entity.State == EntityState.Added)
        //           {
        //               ((BaseEntity)entity.Entity).DateCreated = DateTime.UtcNow;
        //               ((BaseEntity)entity.Entity).UserCreated = currentUsername;
        //           }

        //           ((BaseEntity)entity.Entity).DateModified = DateTime.UtcNow;
        //           ((BaseEntity)entity.Entity).UserModified = currentUsername;
        //       }
        //   }

