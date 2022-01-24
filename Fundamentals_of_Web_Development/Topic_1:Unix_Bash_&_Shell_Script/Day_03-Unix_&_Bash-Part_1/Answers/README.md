#Part I - Creation of Files and Directories

**Tip** : To create empty files, you can use the command: *touch file_name.extension*.

1. In the terminal, use the creation directories command that you learn, and create a directory named *unix_tests* and navigate into it.

***
mkdir unix_tests
cd unix_tests
***

2.  Create a text file with the name *trybe.txt*.

***
touch trybe.txt
***

3.  Create a copy of the file named *trybe.txt*, with the name *trybe_backup.txt*.

***
cp trybe.txt trybe_backup.txt
***

4.  Rename the file to *trybe.txt*.

***
mv trybe.txt another_file.txt
***

5.  Inside of *unix_tests* , create a new directory named *backup*.

***
mkdir backup
***

6.  Move the file *trybe_backup.txt* to the directory *backup*.

***
mv trybe_backup.txt backup
***

7.  Inside of *unix_tests* , create a new directory named *backup2*.

***
mkdir backup2
***

8.  Move the file *trybe_backup.txt* from the directory *backup* to *backup2*.

***
mv backup/trybe_backup.txt backup2
***

9.  Delete the *backup* directory.

***
rmdir backup
***

10. Rename the *backup2* directory to *backup*.

***
mv backup2 backup
***

11. Show the full path of your current directory and list all the files in it.

***
pwd
ls -a
***

12. Delete the *backup* directory.

***
rm -rf backup
***

13. Clear the terminal.

***
clear
***


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

***
head -n 5 skill.txt
***

15. Show on the screen the last 4 skills of the file *skills.txt*.

***
tail -n 4 skill.txt
***

16. Delete all the files that its names end with *.txt*.Apague todos os arquivos que *terminem em .txt*.

***
rm *.txt
***

# Part II - Manipulation & Search

1.  In the *unix_test* directory, download a file with the names of all contries using the curl command:

***
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
***

2.  Show all the content from the file *countries.txt* on the screen.

***
cat countries.txt
***

3.  Show the content from *countries.txt*, page by page, until find *Zambia*.

***
less countries.txt
***

4.  Show again the content from *countries.txt*, page by page, but now use a command to search for *Zambia*.

***
less contries.txt
/Zambia
***

5.  Search for *Brazil* in *countries.txt*.

***
grep Brazil countries.txt
***

6.  Search again for *Brazil*, but know using *lower case*.

***
grep -i Brazil countries.txt
***

    ####**For the next exercises, create a new file named phrases.txt e add a phew phrases of your choice in it. You don't have to create the file in the terminal.**
    
7.  Search for phrases that do not have the word *fox*.

***
grep -iv fox phrases.txt
***

8.  Count the number of words in the file *phrases.txt*.

***
wc -w phrases.txt
***

9.  Count the number of lines in the file *phrases.txt*.

***
wc -l phrases.txt
***

10. Create the files *empty.tbt* and *empty.pdf*.

***
touch empty.tbt empty.pdf
***

11. List all the files from the *unix_test* directory.

***
ls *
***

12. List all the files with the *.txt* extension.

***
ls *.txt
***

13. List all the files with the extensions *.tbt* or *.txt*.

***
ls *.tbt *.txt
***

14. Acess the manual of the *ls* command.

***
man ls
***
