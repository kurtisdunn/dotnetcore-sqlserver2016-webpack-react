using System.Collections.Generic;
using System.Linq;
using Blog.Entities;

namespace Blog.Services
{
     public static class PostsDbContextExtensions
     {
          public static void CreateSeedData
               (this PostsDbContext context)
          {
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
                         Title = "Thor: Ragnarock",
                         Body = "Nullam ut tincidunt nunc. [Pellentesque][1] metus lacus, commodo eget justo ut, rutrum varius nunc. Sed non rhoncus risus. Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, nec consequat ipsum mattis id. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu."
                    },
                    new Post()
                    {
                         Title = "Black Panther",
                         Body = "Nullam ut tincidunt nunc. [Pellentesque][1] metus lacus, commodo eget justo ut, rutrum varius nunc. Sed non rhoncus risus. Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, nec consequat ipsum mattis id. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu."
                    }
               };
               context.AddRange(posts);
               context.SaveChanges();
          }
     }
}
