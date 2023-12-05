using System.Numerics;

namespace AdventCode_D3
{
    /// <summary>
    /// Program class to handle Async Init and the console.
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Application Entry-point.
        /// </summary>
        /// <param name="args">The application arguments.</param>
        static void Main(string[] args)
        {
            Init(args); //Async Init.
            Exit(0); //Exit cleanly.
        }

        static async void Init(string[] args)
        {
            BigInteger input = 0;
            if (args.Length > 0)
            {
                try
                {
                    input = BigInteger.Parse(args[0]); //If application arguments are present use them.
                }
                catch { await Log("NOT A NUMBER!?"); Exit(1); } //Exit if can't parse!
            }
            else
            {
                await Log("Input:");
                try
                {
                    input = BigInteger.Parse(Console.ReadLine()); //otherwise read input from the console.
                }
                catch { await Log("NOT A NUMBER!?"); Exit(1); } //Exit if can't parse!
            }
            Submission submission = new Submission(); //Init submission.
            await Log($"Free Cups: {await submission.CoffeeCounter(input)}");
        }

        /// <summary>
        /// Logs a message to the console window.
        /// </summary>
        /// <param name="text">The text you would like to display.</param>
        static async Task Log(string text)
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.Write($"[{DateTime.Now}] AdventCode: ");
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine(text);
        }

        /// <summary>
        /// Closes down the application.
        /// </summary>
        /// <param name="exitCode">The code to represent how this application closed.</param>
        static async void Exit(int exitCode)
        {
            await Log("-------------------------------------------");
            await Log($"Application Exited. (Code:{exitCode})");
            await Log("Press any key to close.");
            Console.ReadKey();
            Environment.Exit(exitCode);
        }
    }

    internal class Submission
    {
        /// Free Coffee-cup counter
        /// 
        /// Every 6 cups of coffee I buy, I get the 7th for free. Create a function that takes the total cups I have bought
        /// and returns how many free cups I would receive.
        /// 
        /// Solution: Divide bought cups by 6, round the result down (just cast to BigInt). (Also use BigInteger rather than int so we can have large numbers!)


        /// <summary>
        /// Returns total free cups based on the cups bought.
        /// </summary>
        /// <param name="cups">The amount of cups the customer has bought.</param>
        /// <returns>The total count of free cups.</returns>      
        internal async Task<BigInteger> CoffeeCounter(BigInteger cups)
        {
            return (BigInteger)(cups / 6); //Math.
        }
    }
}
