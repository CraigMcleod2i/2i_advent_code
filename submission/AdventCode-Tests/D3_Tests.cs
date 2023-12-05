using System.Numerics;

namespace AdventCode_Tests
{
    [TestClass]
    public class D3_Tests
    {
        AdventCode_D3.Submission? submission = null;

        [TestInitialize]
        public void Setup()
        {
            submission = new AdventCode_D3.Submission();
        }
        [TestCleanup]
        public void TearDown()
        {
            submission = null;
        }

        [TestMethod]
        public void CoffeeCounter_Check()
        {
            BigInteger boughtCups = 12;
            BigInteger freeCups = submission.CoffeeCounter(boughtCups).Result;
            
            Assert.AreEqual(boughtCups / 6, freeCups);
        }
    }
}
