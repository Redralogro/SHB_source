using NUnit.Framework;
using Program;
[TestFixture]
namespace NUnit
{
    public class Tests
    {
        private Program _program;
        [SetUp]
        public void Setup()
        {
            _program = new Program();
        }

        [Test]
        [Test]
        public void OnePlusOneEqualTwo()
        {
            Assert.AreEqual(2, _program.Add(1, 1));
        }
    
        [Test]
        public void TwoPlusTwoEqualFour()
        {
            Assert.AreEqual(4, _program.Add(2, 2));
        }
    
        [Test]
        public void FourPlusOneEqualFive()
        {
            Assert.AreEqual(5, _program.Add(4, 1));
        }
    }
}