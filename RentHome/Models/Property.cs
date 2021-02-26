using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentHome.Models
{
    public class Property
    {
        public int prpertyId { get; set; }
        public string properttype { get; set; }
        public string propertystatus { get; set; }
        public string area { get; set; }
        public string image { get; set; }
    }
}