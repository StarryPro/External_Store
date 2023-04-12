import useForceUpdate from "../hooks/useForceUpdate";


// Business Logic

const state = {
  count: 0
}

function increase(){
  state.count += Math.ceil(Math.random())*10
}

// UI

export default function Counter() {
  const forceUpdate = useForceUpdate();

  const handleClick = () => {
  increase()
   // 강제로 렌더링
   forceUpdate()

  }
  return (
    <>
    <div>
      <p>{state.count}</p>
      <button type="button" onClick={handleClick}>Increase</button>
    </div>
    </>
  )
}