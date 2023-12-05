namespace AdventCode_D1
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
            string input = "";
            if (args.Length > 0)
            {
                 input = args[0]; //If application arguments are present use them.
            }
            else
            {
                await Log("Input:");
                input = Console.ReadLine(); //otherwise read input from the console.
            }
            Submission submission = new Submission(); //Init submission.
            await Log($"Can Walk across: {await submission.CanWalk(input)}");
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
        /// Broken Bridge
        /// 
        /// Create a function that accepts a string of characters to represent a bridge which 
        /// will return true if the bridge is safe to cross (does not contain any empty spaces) otherwise false.
        /// 
        /// Solution: First we validate the string then, determine if there are any white spaces present.
        

        /// <summary>
        /// Determines if the bride can be walked on (has any white spaces).
        /// </summary>
        /// <param name="bridge">The string bridge you would like to check.</param>
        /// <returns>True if the bridge is safe to walk over (no white spaces) otherwise false.</returns>      
        internal async Task<bool> CanWalk(string bridge)
        {
            bool hasHole = false;
            foreach(char character in bridge)
            {
                if (!Char.IsLetterOrDigit(character) && !Char.IsSymbol(character) && !Char.IsPunctuation(character)) hasHole = true; //Is made out of bridge stuff? (validation)
                else if (Char.IsWhiteSpace(character)) hasHole = true; //is there an empty space?
            }
            return !hasHole;
        }
    }
}
