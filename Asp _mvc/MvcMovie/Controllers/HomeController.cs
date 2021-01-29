using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MvcMovie.Models;

namespace MvcMovie.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IviewModel _viewModel;
        private readonly ITestViewModel _testViewModel;


        public HomeController(ILogger<HomeController> logger ,IviewModel viewModel, ITestViewModel testViewModel)
        {
            _logger = logger;
            _viewModel = viewModel;
            _testViewModel = testViewModel;
        }

        public IActionResult Index()
        {
            ViewData["Greeting"] = "Hello World!";
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
