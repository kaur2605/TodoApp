import { render, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { TodoList } from "./TodoList"
import React from "react"
const setup = (
  props = {
    todos: [],
    addNote: jest.fn(),
    removeNote: jest.fn(),
    toggleComplete: jest.fn(),
  }
) => {
  return render(<TodoList {...props} />)
}

test("renders the correct initial DOM", () => {
  const wrapper = setup()
  const newTitle = wrapper.getByTestId("newtitle")
  const newDesc = wrapper.getByTestId("newdesc")
  const todos = wrapper.queryAllByTestId("todo")

  // The input should be blank.
  expect(newTitle.getAttribute("value")).toBe("")
  expect(newTitle).toBeInTheDocument()
  expect(newDesc).toBeInTheDocument()

  // There should be 0 todos in the document.
  expect(todos.length).toBe(0)
})

test("creating  new Note successfully ", () => {
  const props = {
    todos: [],
    addNote: jest.fn(),
    removeNote: jest.fn(),
    toggleComplete: jest.fn(),
  }
  const wrapper = render(<TodoList {...props} />)
  const newTitle = wrapper.getByTestId("newtitle")
  const newDesc = wrapper.getByTestId("newdesc")
  const todos = wrapper.queryAllByTestId("todo")
  const addNote = wrapper.getByTestId("addnote")

  // Create the todo.

  fireEvent.change(newTitle, { target: { value: "Learn new framework" } })
  fireEvent.change(newDesc, { target: { value: "details descriptions here" } })

fireEvent.click(addNote)


  expect(props.addNote).toHaveBeenCalledWith("Learn new framework","details descriptions here" )
  expect(newTitle).toBeInTheDocument()
  expect(newDesc).toBeInTheDocument()
  
    

  expect(todos.length).toBe(0)
})
