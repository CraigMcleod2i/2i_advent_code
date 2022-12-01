import pyfiglet
import datetime

dt  = datetime.datetime
now = dt.now()

date = datetime.datetime(2022, 12, 25) - datetime.datetime.now()

xmas_date = str(date.days)

xmas = "       " + xmas_date

ASCII_art_1 = pyfiglet.figlet_format(xmas)
ASCII_art_2 = pyfiglet.figlet_format("  Days")
ASCII_art_3 = pyfiglet.figlet_format("   until")
ASCII_art_4 = pyfiglet.figlet_format("  XMAS!")

print(ASCII_art_1)
print("             /\\")
print("            <  >")
print("             \/")
print("             /\\")
print("            /  \\")
print("           /++++\\")
print("          /  ()  \\")
print("          /      \\")
print("         /~`~`~`~`\\")
print("        /  ()  ()  \\")
print("        /          \\")
print("       /*&*&*&*&*&*&\\")
print("      /  ()  ()  ()  \\")
print("      /              \\")
print("     /++++++++++++++++\\")
print("    /  ()  ()  ()  ()  \\")
print("    /                  \\")
print("   /~`~`~`~`~`~`~`~`~`~`\\")
print("  /  ()  ()  ()  ()  ()  \\")
print("  /*&*&*&*&*&*&*&*&*&*&*&\\")
print(" /                        \\")
print("/,.,.,.,.,.,.,.,.,.,.,.,.,.\\")
print("           |   |")
print("          |`````|")
print("          \_____/")
print(ASCII_art_2)
print(ASCII_art_3)
print(ASCII_art_4)