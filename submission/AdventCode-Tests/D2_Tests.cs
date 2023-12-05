namespace AdventCode_Tests
{
    [TestClass]
    public class D2_Tests
    {
        AdventCode_D2.Submission? submission = null;

        [TestInitialize]
        public void Setup()
        {
            submission = new AdventCode_D2.Submission();
        }
        [TestCleanup]
        public void TearDown()
        {
            submission = null;
        }

        [TestMethod]
        public void ShortenString_LengthCheck()
        {
            string testString = "This is a test message";
            string shortString = submission.ShortenString(testString).Result;

            Assert.AreEqual(testString.Split(" ").Length, shortString.Split("-").Length);
        }

        [TestMethod]
        public void ShortenLengthen_MatchCheck()
        {
            string testString = "This is a test message";
            string shortString = submission.ShortenString(testString).Result;

            string longString = submission.LengthenString(shortString).Result;

            Assert.AreEqual(testString, longString);
        }
    }
}
