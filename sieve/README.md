# Sieve

Write a program that uses the Sieve of Eratosthenes to find all the primes from 2 up to a given number.

The Sieve of Eratosthenes is a simple, ancient algorithm for finding all
prime numbers up to any given limit.

Create your range, starting at two and ending at the given limit.

The algorithm consists of repeating the following over and over:

- take the next available unmarked number in your list (it is prime)
- remove all the multiples of that number (they are not prime)

Repeat until you don't have any possible primes left in your range.

When the algorithm terminates, all the numbers in the list that have not
been removed are prime.

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node .
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

Sieve of Eratosthenes at Wikipedia [view source](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
