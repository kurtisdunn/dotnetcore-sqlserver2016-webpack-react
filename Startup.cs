using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using Blog.Services;
using Microsoft.AspNetCore.SpaServices.Webpack;


namespace moviesapi
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)

             {
                  var connectionString =  "Server=localhost;Database=MoviesDB;User Id=sa;Password=Passw0rd!";
                  services
                    .AddDbContext<PostsDbContext>(o =>
                      o.UseSqlServer(connectionString));
                      services.AddHttpContextAccessor();
                      // services.AddTransient<IUserRepository, UserRepository>();
                  services.AddMvc();
             }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, PostsDbContext moviesDbContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                  HotModuleReplacement = true
                  });
            }

            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseCookiePolicy();
            moviesDbContext.CreateSeedData();
            app.UseMvc();

            // app.Run(async (context) =>
            // {
            //     await context.Response.WriteAsync("Hello World!");
            // });
        }
    }
}
