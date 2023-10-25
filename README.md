# assignment-tracker

for simplicity, no database is implemented to enforce uniqueness of each entry.
current version utilizes a list to store created assignments.
deleting assigment relies on the title of the selected assignment to identify which element on the assigment list to delete and it will only deal with the first occurence.
therefore, deleting the later of the multiple entries with duplicate names will resulting in removing the very first entry instead.
