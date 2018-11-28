using Microsoft.AspNetCore.Mvc;
using Blog.Services;

namespace Blog.Controllers
{
     [Route("api/[controller]")]
     public class PostsController : Controller
     {
          private DataContext _context;
          public PostsController(DataContext context)
          {
               _context = context;
          }
          public IActionResult GetPosts()
          {
               return Ok(_context.Posts);
          }
     }
}
