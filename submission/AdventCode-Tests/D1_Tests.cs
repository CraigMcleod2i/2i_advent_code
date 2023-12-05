namespace AdventCode_Tests
{
    [TestClass]
    public class D1_Tests
    {
        AdventCode_D1.Submission? submission = null;

        [TestInitialize]
        public void Setup()
        {
            submission = new AdventCode_D1.Submission();
        }
        [TestCleanup]
        public void TearDown()
        {
            submission = null;
        }

        [TestMethod]
        public void CanWalk_Positive_1()
        {
            string bridge = "zexijm234567890-===][[#'/,874651-/*+3.0edesxrdcft\"ygu"; //I can walk this bridge

            bool result = submission.CanWalk(bridge).Result;
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CanWalk_Positive_2()
        {
            string bridge = "869adft\"y231u"; //I can walk this bridge

            bool result = submission.CanWalk(bridge).Result;
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CanWalk_Negative_1()
        {
            string bridge = "zexijm2 34567890-===][[#'/,874  651-/*+3. 0edesx rdcft\"ygu"; //I can't walk over this bridge 

            bool result = submission.CanWalk(bridge).Result;
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void CanWalk_Negative_2()
        {
            string bridge = "zexijm2 3455345e4dr4f6t7gy7]['#.=-87+6*++"; //I can't walk over this bridge

            bool result = submission.CanWalk(bridge).Result;
            Assert.IsFalse(result);
        }
    }
}
