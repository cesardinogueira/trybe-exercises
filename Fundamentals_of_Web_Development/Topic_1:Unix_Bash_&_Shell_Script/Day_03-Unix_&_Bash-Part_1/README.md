#Part I - Creation of Files and Directories

**Tip** : To create empty files, you can use the command: *touch file_name.extension*.

1. In the terminal, use the creation directories command that you learn, and create a directory named *unix_tests* and navigate into it.
2.  Create a text file with the name *trybe.txt*.
3.  Create a copy of the file named *trybe.txt*, with the name *trybe_backup.txt*.
4.  Rename the file to *trybe.txt*.
5.  Inside of *unix_tests* , create a new directory named *backup*.
6.  Move the file *trybe_backup.txt* to the directory *backup*.
7.  Inside of *unix_tests* , create a new directory named *backup2*.
8.  Move the file *trybe_backup.txt* from the directory *backup* to *backup2*.
9.  Delete the *backup* directory.
10. Rename the *backup2* directory to *backup*.
11. Show the full path of your current directory and list all the files in it.
12. Delete the *backup* directory.
13. Clear the terminal.

**For the exercises 14 and 15, create, in the normal graphic mode of your operational system, (with the mouse), a text file with the following content, named _skills.txt_ :**

...
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
...

14. Show on the screen the first 5 skills of the file *skills.txt*.
15. Show on the screen the last 4 skills of the file *skills.txt*.
16. Delete all the files that its names end with *.txt*.Apague todos os arquivos que *terminem em .txt*.

# Part II - Manipulation & Search

1.  In the *unix_test* directory, download a file with the names of all contries using the curl command:

***
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
***

2.  Show all the content from the file *countries.txt* on the screen.
3.  Show the content from *countries.txt*, page by page, until find *Zambia*.
4.  Show again the content from *countries.txt*, page by page, but now use a command to search for *Zambia*.
5.  Search for *Brazil* in *countries.txt*.
6.  Search again for *Brazil*, but know using *lower case*.
    ####**For the next exercises, create a new file named phrases.txt e add a phew phrases of your choice in it. You don't have to create the file in the terminal.**
7.  Search for phrases that do not have the word *fox*.
8.  Count the number of words in the file *phrases.txt*.
9.  Count the number of lines in the file *phrases.txt*.
10. Create the files *empty.tbt* and *empty.pdf*.
11. List all the files from the *unix_test* directory.
12. Listt all the files with the *.txt* extension.
13. List all the files with the extensions *.tbt* or *.txt*.
14. Acess the manual of the *ls* command.
