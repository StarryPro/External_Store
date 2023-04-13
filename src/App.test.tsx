import {  render, screen, fireEvent } from "@testing-library/react"
import { container } from "tsyringe"
import App from "./App"

const context = describe

test('App', ()=>{
  render(<App/>)
})

describe('App', () => {
  beforeEach(()=>{
    container.clearInstances();
  })
})

context('When press increase button once', () => {
  test('counter', () => {
    render(<App/>)

  fireEvent.click(screen.getByText('Increase'))
  expect(screen.getAllByText('Count: 1')).toHaveLength(2)
  })
})