using System.Collections.Generic;
using System.Linq;
using Blog.Entities;

namespace Blog.Services
{
     public static class DataContextExtensions
     {
          public static void CreateSeedData
               (this DataContext context)
          {
            if(context.Users.Any())
            
               return;
             var user = new List<User>() 
             {

                 new User()
                 {
                    FirstName = "Admin",
                    LastName = "istrator",
                    Email = "admin@admin.com",
                    Username = "admin",
                    PasswordHash = System.Text.Encoding.UTF8.GetBytes("a761ce3a45d97e41840a788495e85a70d1bb3815"),
                    PasswordSalt = System.Text.Encoding.UTF8.GetBytes("f8ca9cce5531baa160838044ab0533118a85604a")
                 }
             };
                context.AddRange(user);
                context.SaveChanges();
            

               if (context.Posts.Any())
                    return;
               var posts = new List<Post>()
               {
                    new Post()
                    {
                         Title = "Lorem ipsum dolor sit amet",
                         Body = "Nullam ut tincidunt nunc. [Pellentesque][1] metus lacus, commodo eget justo ut, rutrum varius nunc. Sed non rhoncus risus. Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, nec consequat ipsum mattis id. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu."
                    },
                    new Post()
                    {
                         Title = "Lorem ipsum dolor sit amet",
                         Body = "Nullam ut tincidunt nunc. [Pellentesque][1] metus lacus, commodo eget justo ut, rutrum varius nunc. Sed non rhoncus risus. Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, nec consequat ipsum mattis id. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu."
                    },
                    new Post()
                    {
                         Title = "Lorem ipsum dolor sit amet",
                         Body = "Nullam ut tincidunt nunc. [Pellentesque][1] metus lacus, commodo eget justo ut, rutrum varius nunc. Sed non rhoncus risus. Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, nec consequat ipsum mattis id. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu."
                    }
               };
               context.AddRange(posts);
               context.SaveChanges();
          }
     }
}
