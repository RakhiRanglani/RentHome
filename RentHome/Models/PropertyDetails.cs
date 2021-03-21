using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentHome.Models
{
    public class PropertyDetails
    {
        public int rowindex { get; set; }
        public string img1 { get; set; }
        public string img2 { get; set; }
        public string img3 { get; set; }
        public string propertydescription { get; set; }
        public string address { get; set; }
        public string bedrooms { get; set; }
        public string bathroom { get; set; }
        public string price { get; set; }
    }
}