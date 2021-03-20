
using Grpc.Core;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RentHome.Models;
using RestSharp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RentHome.Controllers
{
   // [EnableCors(origins: "https://renthome20210304012055.azurewebsites.net", headers: "*", methods: "*")]

    [RoutePrefix("api/Property")]
    public class PropertyController : ApiController
    {

        public static List<string> InvalidJsonElements;
        // GET api/<controller>
     
        // [EnableCors(origins: "https://renthome20210304012055.azurewebsites.net/HtmlFile/HomePage.html", headers: "*", methods: "*")]
        [HttpGet]
        [Route("~/api/Property/GetProperty")]
       
        public IHttpActionResult GetProperty()
        {
            IHttpActionResult ret = null;
            List<Property> list = new List<Property>();

            list = GetJSONData();
            if (list.Count > 0)
            {
                ret = Ok(list);
            }
            else
            {
                ret = NotFound();
            }

            return ret;
        }
        [HttpGet]

        [Route("GetPropertyDetails")]
        public IHttpActionResult GetPropertyDetails()
        {
            IHttpActionResult ret = null;
            List<PropertyDetails> list = new List<PropertyDetails>();

            list = GetJSONPropertyDetails();
            if (list.Count > 0)
            {
                ret = Ok(list);
            }
            else
            {
                ret = NotFound();
            }

            return ret;
        }
        private List<Property> GetJSONData()
        {

            List<Property> validProperty = new List<Property>();
            InvalidJsonElements = null;
            try
            {
               
                string jsonPath = AppDomain.CurrentDomain.BaseDirectory + "property.json";
                // Call the deserializer  
                validProperty = JsonConvert.DeserializeObject<List<Property>>(File.ReadAllText(jsonPath));

            }

            catch (Exception ex)
            {
                InvalidJsonElements = InvalidJsonElements ?? new List<string>();
                InvalidJsonElements.Add(ex.ToString());
            }
            return validProperty;
        }

        private List<PropertyDetails> GetJSONPropertyDetails()
        {
            List<PropertyDetails> validPropertyDetails = new List<PropertyDetails>();
            InvalidJsonElements = null;
            try
            {
                string jsonPath = AppDomain.CurrentDomain.BaseDirectory + "propertydetails.json";
                // Call the deserializer  
                validPropertyDetails = JsonConvert.DeserializeObject<List<PropertyDetails>>(File.ReadAllText(jsonPath));

            }

            catch (Exception ex)
            {
                InvalidJsonElements = InvalidJsonElements ?? new List<string>();
                InvalidJsonElements.Add(ex.ToString());
            }
            return validPropertyDetails;
        }
        private List<Property> RealtorAPICall()
        {
            List<Property> propertyList = new List<Property>();
            string apiResponse = string.Empty;
            try
            {
                var client = new RestClient("https://mashvisor-api.p.rapidapi.com/rental-rates?state=CA&source=airbnb&city=Los%20Angeles&zip_code=90291");
                var request = new RestRequest(Method.GET);
                request.AddHeader("x-rapidapi-key", "20094f3d8amshbdef4d5a86afa6bp1efcbajsnf5c577d71047");
                request.AddHeader("x-rapidapi-host", "mashvisor-api.p.rapidapi.com");
                IRestResponse response = client.Execute(request);
            }
            catch (IOException ioex)
            {
                Console.WriteLine(ioex.Message);
            }
            return propertyList;
        }
    }
}
