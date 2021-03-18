using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Routing;

namespace RentHome
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //to enable crosssite origin
            config.EnableCors();

            config.Routes.Clear();
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
            name: "GetProperty",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { id = RouteParameter.Optional }
           );
            config.Routes.MapHttpRoute(
            name: "GetPropertyDetails",
            routeTemplate: "api/{controller}/{action}/{id}",
             defaults: new { id = RouteParameter.Optional }
            );

        }
    }
}
