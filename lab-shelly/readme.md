## Description:
* For this assignment you will need to read three files and console log the first 8 bytes in hex of each file. (hint use `toString` docs)

``` shell
> $ npm start
< 5a6f6d6269652069
< 596f757220626f6e
< 486f646f72212048
```

* Also, you must guarantee that three files are read and console logged in order `'one.txt', 'two.txt', 'three.txt'` regardless of file size.
* You will need to write tests that guarantee that the files are logged in order.
* You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
 * hint read mocha docs    

## Bonus
  * 2pts don't use nested callbacks (You should Google some ideas on how to accomplish this if you have questions)

##Rubric:
  * Async Handling: 4pts
  * Use of fs: 2pts
  * Testing: 4pts
