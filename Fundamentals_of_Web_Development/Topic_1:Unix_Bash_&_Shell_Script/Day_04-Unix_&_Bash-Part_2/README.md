# Parte I - Input and Output Command

1.  Navigate into the *unix_tests* directory;

2.  Create a text file named *skills2.txt* and add these values: *Internet*, *Unixt* and *Bash*, each one in an individual line.

3.  Add 5 more values to the file and print the values in a sorted list in the shell. 🤓

4.  Count the number of lines that *skills2.txt* has.

5.  Create a file named *top\_skills.txt* using the *skills2.txt* file, with the first 3 skills in alphabetic order.

6.  Create a file named *phrases2.txt* and add a phew phrases.

7.  Count the number of lines that have the letters *br*.

8.  Count the number of lines that doesn't have the letters *br*.

9.  Add the name of two countries to the end of the file *phrases2.txt*.

10. Create a new file named *bunch\_of\_things.txt* with the content of *phrases2.txt* and *countries.txt*.

11. Sort the file *bunch\_of\_things.txt*.


# Part II - Permissions

1.  Navigate into the *unix_tests directory*;

2.  Execute the command *ls -l* and see which are the files permissions;

3.  Change the permisson of the file *bunch\_of\_things.txt* so that all the users can read and write and check with the command *ls -l* if everything is right;

>Expected result: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch\_of\_things.txt

4.  Remove the write permission from the file *bunch\_of\_things.txt* to all users;

>Expected result: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch\_of\_things.txt

5. Rollback the permission *bunch\_of\_things.txt* to its initial state with the command: *chmod 644 bunch\_of\_things.txt*;

>Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

# Part III - Processes & Jobs

1.  List all processes;

2.  Now use the command *sleep 30 &*;

3.  Use the list of running processes to find the PID of the process that is executing the command *sleep 30* and terminate its execution (kill the process) ;

4.  Execute again the command *sleep 30*, but now without the *&*. After that, make it run in the background;

5.  Create a process in the background that runs the command *sleep* for 300 seconds;

6.  Create two more processes that runs the command *sleep*, one for 200 and the other for 100 secondsCrie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectively.

>You must create them in the foreground (without the use of *&*) and suspend them (pressing *ctrl+z*) after they start running.

7.  Verify with only the process *sleep 300* is running with the command *jobs*. Suspend its execution.

>You will need to bring the processes from the background to the foreground (*fg*) and suspend it (*ctrl+z*).

8.  Resume the execution of the process *sleep 100* in the background with the command bg.

9.  Terminate the execution of all *sleep* processes (kill the processes).




