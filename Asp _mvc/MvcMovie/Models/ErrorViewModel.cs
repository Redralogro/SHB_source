using System;

namespace MvcMovie.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
    public interface IviewModel {

    }
    public class ViewModel : IviewModel {
        public ViewModel(){
            Console.WriteLine("ASP .NET");
        }
    }
    public interface ITestViewModel {

        string get_content (string i);
    }
    public class TestViewModel: ITestViewModel {
        public TestViewModel(){
            Console.WriteLine(get_content("Yes"));
        }
         public string get_content (string str)
        {
            return "U love me ?: "+ str;
        }
    }
}
