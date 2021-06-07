import React, { useState, ChangeEvent, FormEvent } from "react"
import {
  makeStyles,
  Typography,
  Box,
  Theme,
  createStyles,
} from "@material-ui/core"
import { TextField, Button } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import "./index.css"

export interface TodoListProps {
  todos: Array<Todo>
  toggleComplete: ToggleComplete
  addNote: AddNote
  removeNote: RemoveNote
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
      maxWidth: 345,
      border: "none",
      boxShadow: "none",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#DCDCDC",
      marginBottom: 10,
      margin: theme.spacing(1),
    },
  })
)

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  addNote,
  removeNote,
}) => {
  const classes = useStyles()
  const [newTitle, setNewtitle] = useState<string>("")
  const [newDesc, setNewdesc] = useState<string>("")

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewtitle(e.target.value)
  }
  const handleDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setNewdesc(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addNote(newTitle, newDesc)
    setNewtitle("")
    setNewdesc("")
  }
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          aria-label="minimum height"
          placeholder="Title"
          value={newTitle}
          className={classes.margin}
          inputProps={{ "data-testid": "newtitle" }}
          onChange={handleTitle}
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          className={classes.margin}
          rows={4}
          inputProps={{ "data-testid": "newdesc" }}
          placeholder="description"
          value={newDesc}
          onChange={handleDesc}
        />
        <Box my={2} m>
          <Button
            variant="contained"
            color="primary"
            data-testid="addnote"
            onClick={handleSubmit}
          >
            Add To Card
          </Button>
        </Box>
      </form>
      <Card className={classes.root}>
        {todos.map((todo) => (
          <div className={classes.details} data-testid="todo">
            <CardContent data-testid="addtitle">
              <Typography gutterBottom variant="h5" component="h2">
                <label className={todo.complete ? "complete" : undefined}>
                  {todo.title}
                  <input
                    type="checkbox"
                    onChange={() => toggleComplete(todo)}
                    checked={todo.complete}
                  />
                </label>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {todo.description}
              </Typography>
              <Box mt={6} mr={5}>
                <Button
                  data-testid="deleteButton"
                  color="secondary"
                  onClick={(id) => removeNote(todo.id)}
                >
                  Remove
                </Button>
              </Box>
            </CardContent>
          </div>
        ))}
      </Card>
    </>
  )
}
