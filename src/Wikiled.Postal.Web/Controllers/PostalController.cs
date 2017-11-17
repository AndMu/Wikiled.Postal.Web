using Microsoft.AspNetCore.Mvc;

namespace Wikiled.Postal.Web.Controllers
{
    [Route("api/[controller]")]
    public class PostalController : Controller
    {
        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
    }
}
