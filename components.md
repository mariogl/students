# DATA

## Data layer

- List of students:
  - id
  - name
  - surname
  - isHappy

## Data modifications

- Load students
- Toggle student isHappy
- Delete student
- Add student

# COMPONENTS

## App

- Show layout component

## Layout

- Show header component
- Show list "Students list" title with heading
- Show students counter component
- Show students list component

## Header?

-Show app title "Students App" with heading

## Students counter

- Recieves list of students
- Show number total students

## Students list

- Recieves list of students
- Show a student card component for every student in the list of students.
- Sends a student to each Student card component

## Student card

- Recieves toggle student isHappy action
- Recieves delete student action
- Recieves a student
- Show student name and surname "Name Surname" inside heading
- Show button component to toggle mood
- Show button component to delete student
- Sends "😊" to button component that shows mood if mood is happy
- Sends "😔" to button component that shows mood if mood is sad
- Sends "🗑️" to button component that delete student
- Sends toggle student isHappy action to button component that shows mood
- Sends delete student action to button component that delete student

## Button

- Recieves an icon
- Recieves an action
- Show the recieved icon inside a button
- On click executes the recieved action

## CreateForm

- Receives the add student action
- Shows an input for the new student's name with label "Name"
- Shows an input for the new student's surname with label "Surname"
- Shows a button "Create" to submit the form
- On submit executes the received add student action
