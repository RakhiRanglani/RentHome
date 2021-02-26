
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

namespace RentHome.Controllers
{
    public class PropertyController : ApiController
    {

        public static List<string> InvalidJsonElements;
        // GET api/<controller>
        [System.Web.Http.HttpGet()]
        public IHttpActionResult Get()
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

        private List<Property> GetJSONData()
        {  
          
            List<Property> validProperty = new List<Property>();
            InvalidJsonElements = null;
            try
            {
                string jsonPath = "C:/Users/rakhi/source/repos/RentHome/RentHome/property.json";
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
    private List<Property> RealtorAPICall()
    {
        List<Property> propertyList = new List<Property>();
        string apiResponse = string.Empty;
        try
        {
            var client = new RestClient("https://zillowdimashirokovv1.p.rapidapi.com/getDeepComps.htm");
            var request = new RestRequest(Method.POST);
            request.AddHeader("content-type", "application/x-www-form-urlencoded");
            request.AddHeader("x-rapidapi-key", "20094f3d8amshbdef4d5a86afa6bp1efcbajsnf5c577d71047");
            request.AddHeader("x-rapidapi-host", "ZillowdimashirokovV1.p.rapidapi.com");
            request.AddParameter("application/x-www-form-urlencoded", "zpid=%3CREQUIRED%3E&rentzestimate=true%2Cfalse&count=%3CREQUIRED%3E&zws-Id=%3CREQUIRED%3E", ParameterType.RequestBody);
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
