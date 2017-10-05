# Ruby Cheatsheet

## Datatypes

### String

A string is a collection of characters, typically declared within either single or double quotes.  The difference being that double quotes support interpolation (allows you to evaluate variables within the string).

```ruby
string1 = 'Here\'s a string'
string2 = "#{string1} There's a \"string\""
```

We can also use multi-line strings with HEREDOC notation:

```ruby
string3 = <<-SOME_SORT_OF_LABEL
	#{string1}
	#{string2}
	Everywhere a string!
SOME_SORT_OF_LABEL
```

### Integers

An integer is a whole number.  Arithmetic operations involving only integers will remain integers, meaning that remainders in division will be discarded.

### Floats

A floating point number will keep track of fractional values using a decimal point that can appear anywhere within the number ("i.e. it floats around").

### Boolean

A boolean value is simply either `true` or `false`

### Nil

The absense of a value in Ruby is known as `nil`.  This is like a unified version of `undefined` and `null` in JavaScript.

### Arrays

Arrays are enumerable data structures that contain a sequence of data in Ruby.  We can call array and enumerable methods on any instance of an array (i.e. push,pop,each,map,reduce)	

```Ruby
my_array = [1,2,"Red fish","Blue fish"]

# we could then access Blue Fish at index 3
my_array[3]
```

### Hashes

Hashes in ruby are collections of key value pairs, similar to basic objects in JavaScript.  We also use the curly brace syntax to declare a hash:

```Ruby
my_hash = {
	:a => 1,
	:b => 2,
	:c => "Red Fish",
	:d => "Blue Fish"
}

# we could then access Blue Fish at key :d
my_hash[:d]
```

There's also a nice syntax that mimics JavaScript object notation:

```Ruby
# this is identical to the previous version
my_hash = {
	a: 1,
	b: 2,
	c: "Red Fish",
	d: "Blue Fish"
}
```



