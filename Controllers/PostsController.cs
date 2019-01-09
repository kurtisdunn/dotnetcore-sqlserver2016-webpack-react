using Microsoft.AspNetCore.Mvc;
using Blog.Services;
using Blog.Entities;
using Blog.Dtos;
using System;
using System.Security.Claims;
using Newtonsoft.Json;

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
            var ident = User.Identity as ClaimsIdentity;
            
          //   var userID = ident.Claims.FirstOrDefault(c => c.Type == idClaimType)?.Value;

          //   return Ok();

          //   var user = await _userManager.GetUserAsync(HttpContext.User);
          //   var userService = _context.HttpContext.RequestServices.GetRequiredService<IUserService>();
          //   var userId = int.Parse(_context.Principal.Identity.Name);

            System.Console.WriteLine("User DTO");
            System.Console.WriteLine("");
            System.Console.WriteLine(JsonConvert.SerializeObject(ident));
            System.Console.WriteLine("");
            System.Console.WriteLine("");

          return Ok(_context.Posts);
          }
     }
}
