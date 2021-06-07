import { makeStyles, Typography, Paper, Grid, Box } from "@material-ui/core"
import React, { useState } from "react"
import { TodoList } from "./Todo/TodoList"

export const useStyles = makeStyles((theme) => {
  const { pxToRem: rem } = theme.typography
  return {
    header: {},
    main: {},
    footer: {
      backgroundColor: theme.palette.common.black,
      [theme.breakpoints.up("sm")]: {
        padding: `${rem(24)} ${rem(48)} ${rem(24)}`,
      },
    },
  }
})

export const initialNotes: Array<Todo> = [
  {
    title: "Build an application",
    description: "react app with redux state management",
    id: 1,
    complete: true,
  },
]

function App() {
  const classes = useStyles()

  const [todos, setTodos] = useState<Array<Todo>>(initialNotes)
  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const AddNote: AddNote = (newTitle, newDesc) => {
    const Id = todos.length + 1
    newTitle.trim() !== "" &&
      newDesc.trim() !== "" &&
      setTodos([
        ...todos,
        { title: newTitle, description: newDesc, id: Id, complete: false },
      ])
  }

  const removeNote: RemoveNote = (id: number) => {
    const Newtodos = todos.filter((todo) => todo.id !== id)
    console.log(Newtodos)

    setTodos(Newtodos)
  }
  return (
    <>
      <header>
        <Grid
          container
          component={Paper}
          elevation={0}
          square
          classes={{
            root: classes.footer,
          }}
        >
          <Typography variant="h2" color={"textSecondary"}>
            My TODO App
          </Typography>
        </Grid>
      </header>

      <main>
        <Box width="40%" height="50%" mx="auto" p={6}>
          <Typography variant="h5" data-testid="todolist">
            To-Do-App.
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              removeNote={removeNote}
              addNote={AddNote}
            />
          </Typography>
        </Box>
      </main>

      <footer>
        <Grid
          container
          component={Paper}
          elevation={0}
          square
          classes={{
            root: classes.footer,
          }}
        >
          <Typography variant={"h2"} color={"textSecondary"}>
            Footer
          </Typography>
        </Grid>
      </footer>
    </>
  )
}

export default App
