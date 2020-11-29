package main

import "testing"

func TestSum(t *testing.T)  {
	tables := []struct {
		a int
		b int
		r int
	}{
		{1, 2, 3},
		{2, 2, 4},
		{0, 1, 1},
	}

	for _, table := range tables {
		total := sum(table.a, table.b)

		if total != table.r {
			t.Errorf("Sum ")
			t.Errorf("Sum of (%d+%d) is incorrect, result: %d, expected: %d.", table.a, table.b, total, table.r)
		}
	}
}