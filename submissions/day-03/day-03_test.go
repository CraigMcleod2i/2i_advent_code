package main

import "testing"

func TestTotalFreeCoffees(t *testing.T) {
	var tests = []struct {
		bought, free int
	}{
		{6, 1},
		{12, 2},
		{0, 0},
	}

	for _, tt := range tests {
		result := totalFreeCoffees(tt.bought)
		if result != tt.free {
			t.Errorf("got %d, expected %d", result, tt.free)
		}
	}

}
