# Kindergarten Garden

Write a program that, given a diagram, can tell you which plants each child in the kindergarten class is responsible for.

The kindergarten class is learning about growing plants. The teachers
thought it would be a good idea to give them actual seeds, plant them in
actual dirt, and grow actual plants.

They've chosen to grow grass, clover, radishes, and violets.

To this end, they've put little styrofoam cups along the window sills,
and planted one type of plant in each cup, choosing randomly from the
available types of seeds.

```plain
[window][window][window]
........................ # each dot represents a styrofoam cup
........................
```

There are 12 children in the class:

- Alice, Bob, Charlie, David,
- Eve, Fred, Ginny, Harriet,
- Ileana, Joseph, Kincaid, and Larry.

Each child gets 4 cups, two on each row. The children are assigned to
cups in alphabetical order.

The following diagram represents Alice's plants:

```plain
[window][window][window]
VR......................
RG......................
```

So in the row nearest the window, she has a violet and a radish; in the
row behind that, she has a radish and some grass.

Your program will be given the plants from left-to-right starting with
the row nearest the windows. From this, it should be able to determine
which plants belong to which students.

For example, if it's told that the garden looks like so:

```plain
[window][window][window]
VRCGVVRVCGGCCGVRGCVCGCGV
VRCCCGCRRGVCGCRVVCVGCGCV
```

Then if asked for Alice's plants, it should provide:

- Violets, radishes, violets, radishes

While asking for Bob's plants would yield:

- Clover, grass, clover, clover

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node .
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

Random musings during airplane trip. [view source](http://jumpstartlab.com)
