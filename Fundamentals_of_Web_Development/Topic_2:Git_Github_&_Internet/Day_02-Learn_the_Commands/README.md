# Now in practice

1.  Navigate to the directory of your project with the skill.txt file.

2.  Verify if there is something to commit using the command: *git status*.

    - (If there is something, do the *commit* or remove it).
3.  Create a new *branch* with the name *trybe-skills-changes* and make a checkout to it.

4.  In the file *skill.txt* , add two more skills that you will develope at Trybe at the end of the file content.

    - Use *git add skill.txt*;
    - You can add all files that was modified using git add . , but avoid do that with commit that has a lot of files so you don't add any changes by mistake;
    - Now a *git commit -m "message"*;
    - A good practice is to always resume what your commit is changing, like, *git commit -m "Add two new skills"*;
    - Avoid to make many changes in a single commit. Do that so you can detect easily where a error in the code was submited;
    - And for last, *git push -u origin trybe-skills-changes*;
     

5.  Open a Pull Request with the following description:

    - Give context for what you are doing, leave links or specific citations that are relevants to understand the code.
    - The merge must happen when you arrive at the exercise 10.
    
    
6.  Return to the *main/master* brance with the command: *git checkout master*;

7.  Verify that you are in the *main* branch, with the command: *git branch* (this branch shoud must have the original file, without the skills);

8.  Create a new *branch trybe-skills-updates* from the *master* and check out in it;

9.  In the same skills.txt that you modified in the exercise 4, add one more skill to the end of the content of the file;

    - Atention! Here the file will not have the changes done previously in the other branch 😉;
    - Do a *git add skill.txt*;
    - Now a *git commit -m "message"* ;
    - And for last a *git push -u origin trybe-skills-updates*;
    - After the first "push" of your branch, you can use comando *git push* without specify;
    - Open a Pull Request with a friendly description:
      - The merge must happen when you arrive at the exercise 10.
      

10. Now, it is time to merge the branches trybe-skills-changes and trybe-skills-updates int the branch master , throught Pull Request :

    - First, go to the page from the first Pull Request (branch trybe-skills-changes ) e do a merge clicking on the button "Merge pull request" ;
    - Now go to the other Pull Request page(branch trybe-skills-updates ) and try to do a merge clicking on the same button. Did you notice that it is blocked? This is happening because the Pull Request is trying to change a line of code with another one, and the Git alone can not say wich one is the correct one;
    - You need to solve this conflict before merge the Pull Request. Click on the button "Resolve conflicts", choose one of the two versions (remember to delete the lines with <<<<<<< and >>>>>>>). After that, click on "Mark as resolved" and "Commit merge" ;
    - Now you should be able to do the merge in the Pull Resquest without problems. 😎
