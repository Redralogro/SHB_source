using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Net.Http;  
using System.Web;


namespace Spa_app.Controllers
{
    [ApiController]    
    [Route("[controller]")]
    public class TestPostApiController : System.Web.Http.ApiController
    {

        private readonly ILogger<TestPostApiController> _logger;

        public TestPostApiController(ILogger<TestPostApiController> logger)
        {
            _logger = logger;
        }
        [HttpPost]
        [Route("abc")]
        public IEnumerable<TestAPIService> Post(TestAPIService test)
        {
            var a = new List<TestAPIService>();
            a.Add(new TestAPIService(){
                Email = test.Email,
                Username = test.Username
            });
            return a;
        }
    }
}
