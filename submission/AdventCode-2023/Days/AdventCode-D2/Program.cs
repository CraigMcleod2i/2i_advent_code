using System.IO.Compression;
using System.Text;

namespace AdventCode_D2
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
            if (args.Length > 0) input = args[0]; //If application arguments are present use them.
            else
            {
                await Log("Input:");
                input = Console.ReadLine(); //otherwise read input from the console.
            }
            Submission submission = new Submission(); //Init submission.

            //Start of mess... (it doesn't really matter though as it's all just mainly reporting progress)

            string shortString = await submission.ShortenString(input);
            await Log($"Short string: \"{shortString}\"");
            await Log("Length of short string: " + shortString.Length);

            string longString;
            string finalString;
            if (shortString.Split('-').Length > 6) 
            {
                byte[] dataToCompress = Encoding.UTF8.GetBytes(shortString);
                byte[] compressedData = await submission.CompressString(dataToCompress);
                string compressedString = Encoding.UTF8.GetString(compressedData);
                await Log("Length of compressed string: " + compressedString.Length);
                await Log($"Compressed string: \"{compressedString}\"");
                finalString = compressedString;

                byte[] decompressedData = await submission.DecompressString(compressedData);
                string deCompressedString = Encoding.UTF8.GetString(decompressedData);
                await Log("Length of decompressed string: " + deCompressedString.Length);
                await Log($"Decompressed string: \"{deCompressedString}\"");

                longString = await submission.LengthenString(deCompressedString);
                await Log($"Long string: {longString}");

                await Log("");
                await Log($"Length saved using compression: {input.Length - compressedString.Length} characters!");
                await Log("");
            }
            else
            {
                await Log("NOT ENOUGH WORDS TO COMPRESS!");
                finalString = shortString;
                longString = await submission.LengthenString(shortString);
                await Log($"Long string: \"{longString}\"");
            }

            await Log("");
            await Log($"Length saved using shortening: {input.Length - shortString.Length} characters!");
            await Log("");

            await Log("Length of original string: " + input.Length);
            await Log($"Length of final string: {finalString.Length} ({(int)Math.Round((double)(100 * finalString.Length) / input.Length)}% saved!)");

            //End of mess.
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
        /// Compression
        /// 
        /// Create a simple compression algorithm to convert a given string. (e.g. AAAABBBB -> A4B4)
        /// The smaller the better.
        /// 
        /// Solution: Shorten via db/id hashing/saving then compress the string using Brotli.
        /// 


        List<Tuple<string, string>> db = new List<Tuple<string, string>>(); //Mock DataBase

        /// <summary>
        /// Shortens a string, creating references within the DB and returning a new string with only the hashed ID's.
        /// </summary>
        /// <param name="toShort">The string you would like to shorten</param>
        /// <returns>A shortened string containing only ID references of the original message saves in our DB.</returns>
        internal async Task<string> ShortenString(string toShort)
        {
            string shortString = "";
            string lastWord = toShort.Split(' ').Last();
            foreach (string word in toShort.Split(' ')) 
            {
                if (!string.IsNullOrEmpty(word))
                {
                    string id = $"#{db.Count + 1}"; //New id's is incremented, downside being the ID become longer the larger the DB. Could change to character based IDs?
                    db.Add(new Tuple<string, string>(id, word));
                    shortString += $"{id}";
                    if (word != lastWord) shortString += "-";
                }
            }
            return shortString;
        }

        /// <summary>
        /// Lengthens a string, using the ID references we check the DB for any matches and then return the original message.
        /// </summary>
        /// <param name="toLong">The ID based string you would like to lengthen</param>
        /// <returns></returns>
        internal async Task<string> LengthenString(string toLong)
        {
            string longString = "";
            string lastWord = toLong.Split('-').Last();
            foreach (string id in toLong.Split('-'))
            {
                if (!string.IsNullOrEmpty(id))
                {
                    string word = db.FirstOrDefault(x => x.Item1 == id).Item2; //Mhmmmmm... Enumerables.... (starts drooling)
                    if (!string.IsNullOrEmpty(word)) 
                    {
                        longString += $"{word}"; //same comment as before, could probably do this cleaner.
                        if (id != lastWord) longString += " ";
                    }
                }
            }
            return longString;
        }

        /// <summary>
        /// Compresses bytes using Google Brotli. 
        /// </summary>
        /// <param name="toCompress">The byte stream you would like to compress.</param>
        /// <returns>A compressed stream of bytes.</returns>
        internal async Task<byte[]> CompressString(byte[] toCompress)
        {
            //Create Brotli Memory Stream.
            using (var memoryStream = new MemoryStream())
            {
                using (var brotliStream = new BrotliStream(memoryStream, CompressionLevel.Optimal)) 
                {
                    await brotliStream.WriteAsync(toCompress, 0, toCompress.Length); //Brotli magic...
                }
                return memoryStream.ToArray(); //To async byte stream. (yum)
            }
        }

        /// <summary>
        /// Decompresses bytes using Google Brotli.
        /// </summary>
        /// <param name="toDecompress">Th byte stream you would like to decompress.</param>
        /// <returns>A decompressed stream of bytes.</returns>
        internal async Task<byte[]> DecompressString(byte[] toDecompress)
        {
            //Create Brotli Memory Stream.
            using (var memoryStream = new MemoryStream(toDecompress))
            {
                //Create another stream to output too.
                using (var outputStream = new MemoryStream())
                {
                    using (var brotliStream = new BrotliStream(memoryStream, CompressionMode.Decompress))
                    {
                        await brotliStream.CopyToAsync(outputStream); //More Brotli magic...
                    }
                    return outputStream.ToArray();  //To async byte stream. (yum)
                }
            }
        }
    }
}
