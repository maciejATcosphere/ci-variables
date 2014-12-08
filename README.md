
# Prime Multiplication Project

## Optimization

In order to assure high performance of the app the following measures were
included:
- references to the DOM objects (cells of the multiplication table)
  stored in the object (constant retrieval time)
- lazy multiplication calculated on the fly
- 10k precomputed primes loaded from static file (this could be easily extended
  to 100k primes making the whole app even faster)


## Limits
- the only hard coded limit of the app is 1MB limit on the size prime numbers
  cache. It allows generation of around 150k first prime numbers. The only
  drawback of that is that is requires up to 1 mins to generate initial sequence
  of prime numbers


## Tests Coverage
- two essential components of the app: engine and parser where developed
  using purely TDD approach. The rest of the components because of their
  visual nature were only manually tested.
- all unit and functional tests passed on Ubuntu 14.04 and following engines:
    - PhantomJS 1.9.7
    - Chrome 35.0.1916
    - Firefox 31.0.0
- set of manual performance tests was performed as well showing that the app is
  capable of generating up to 100k prime numbers without significant impact on
  the responsiveness.
- in order to prevent the app from eating up too much of the users resources
  there's hard coded 1MB limit on the primes cache, but it could be easily
  relaxed to allow the user to play around with event milion-th prime number and
  beyond


## Future
- Add automated (selenium / robotframework) tests
- Use background workers for the calculations
- Report slow updates via ErrorView to backend for further investigation
- Add some kind of progress to indicate how much time user needs to wait for
  the initialization of board for large numbers like 50k+

