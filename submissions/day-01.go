package main

import (
	"bufio"
	"fmt"
	"os"
	"unicode"
)

func main() {
	// Prepare scanner for user input.
	scanner := bufio.NewScanner(os.Stdin)

	// Get the string bridge as user input
	var bridge string
	fmt.Println("Enter a string-bridge: ")
	if scanner.Scan() {
		bridge = scanner.Text()
	} else {
		fmt.Println("Unable to read input")
	}

	bridgeBroken := false

	// Check each char of the string
	for _, char := range bridge {
		if unicode.IsSpace(char) {
			bridgeBroken = true
			break
		}
	}

	if bridgeBroken {
		fmt.Println("The bridge is broken!")
	} else {
		fmt.Println("You may pass")
	}
}
