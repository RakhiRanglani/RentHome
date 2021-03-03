using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace RentHome
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
           //to enable crosssite origin
            config.EnableCors();

            config.Routes.Clear();
            config.Routes.MapHttpRoute(name: "DefaultApi", routeTemplate: "api/{controller}/{id}", defaults: new { id = RouteParameter.Optional });

        }
    }
}
