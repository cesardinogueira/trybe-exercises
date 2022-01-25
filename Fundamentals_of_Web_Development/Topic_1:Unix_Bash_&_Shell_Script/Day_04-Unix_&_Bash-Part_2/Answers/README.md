#Parte I - Input and Output Command

1.  Navigate into the *unix_tests* directory;

2.  Create a text file named *skills2.txt* and add these values: *Internet*, *Unix* and *Bash*, each one in an individual line.

```sh
cat > skills2.txt
Internet
Unixt
Bash
```

3.  Add 5 more values to the file and print the values in a sorted list in the shell. 🤓
```sh
cat >> skills2.txt | sort < skills2.txt
Javascript
HTML
CSS
Flexbox
Socket
```

4.  Count the number of lines that *skills2.txt* has.

```sh
wc -l skills2.txt
```

5.  Create a file named *top\_skills.txt* using the *skills2.txt* file, with the first 3 skills in alphabetic order.

```sh
sort<skills2.txt | head -n 3 | cat > top_skills.txt
```


6.  Create a file named *phrases2.txt* and add a phew phrases.


7.  Count the number of lines that have the letters *br*.

```sh
grep br phrases2.txt | wc -l
```


8.  Count the number of lines that doesn't have the letters *br*.

```sh
grep -v br phrases2.txt | wc -l
```


9.  Add the name of two countries to the end of the file *phrases2.txt*.

```sh
cat >> phrases2.txt
Holanda
Dinamarca
```


10. Create a new file named *bunch\_of\_things.txt* with the content of *phrases2.txt* and *countries.txt*.

```sh
cat phrases2.txt countries.txt > bunch_of_things.txt
```


11. Sort the file *bunch\_of\_things.txt*.

```sh
sort -o bunch_of_things.txt bunch_of_things.txt
```



#Part II - Permissions

1.  Navigate into the *unix_tests directory*;

2.  Execute the command *ls -l* and see which are the files permissions;

3.  Change the permisson of the file *bunch\_of\_things.txt* so that all the users can read and write and check with the command *ls -l* if everything is right;

```sh
chmod a=rw bunch_of_things.txt
```


>Expected result: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch\_of\_things.txt

4.  Remove the write permission from the file *bunch\_of\_things.txt* to all users;

```sh
chmod a-w bunch_of_things.txt
```


>Expected result: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch\_of\_things.txt

5. Rollback the permission *bunch\_of\_things.txt* to its initial state with the command: *chmod 644 bunch\_of\_things.txt*;


>Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

#Part III - Processes & Jobs

1.  List all processes;

```sh
ps
```

2.  Now use the command *sleep 30 &*;


3.  Use the list of running processes to find the PID of the process that is executing the command *sleep 30* and terminate its execution (kill the process) ;

```sh
ps
kill 77312
```

4.  Execute again the command *sleep 30*, but now without the *&*. After that, make it run in the background;

```sh
sleep 30
Ctrl + Z
bg %n

```

5.  Create a process in the background that runs the command *sleep* for 300 seconds;

```sh
sleep 300 &
```

6.  Create two more processes that runs the command *sleep*, one for 200 and the other for 100 secondsCrie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectively.

>You must create them in the foreground (without the use of *&*) and suspend them (pressing *ctrl+z*) after they start running.

7.  Verify with only the process *sleep 300* is running with the command *jobs*. Suspend its execution.

```sh
jobs
fg %n
Ctrl + Z
```

>You will need to bring the processes from the background to the foreground (*fg*) and suspend it (*ctrl+z*).

8.  Resume the execution of the process *sleep 100* in the background with the command bg.

```sh
jobs
bg %n
```

9.  Terminate the execution of all *sleep* processes (kill the processes).

```sh
kill %n
kill %n+1
kill %n+2
```
