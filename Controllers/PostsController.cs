using Microsoft.AspNetCore.Mvc;
using Blog.Services;

namespace Blog.Controllers
{
     [Route("api/[controller]")]
     public class PostsController : Controller
     {
          private PostsDbContext _context;
          public PostsController(PostsDbContext context)
          {
               _context = context;
          }
          public IActionResult GetPosts()
          {
               return Ok(_context.Posts);
          }
     }
}
