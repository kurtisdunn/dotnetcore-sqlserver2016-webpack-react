using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
     [Route("/")]
     public class HomeController : Controller
     {
          public IActionResult Index()
          {
               return View();
          }
     }
}
