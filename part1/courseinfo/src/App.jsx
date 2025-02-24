const App = () => {
  const course = {
    name:'Half Stack application development',
    part:[
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  }

  const Header = (props) => {
    console.log(props)
    return (
      <h1>{props.course.name}</h1>
    )
  }

  const Content = (props) => {
    const Part = (part) => {
      console.log(part)
      return (
        <p>
          {part.name} {part.exercises}
        </p>
      )
    }
    return (
      <>
        <Part {...props.course.part[0]} />
        <Part {...props.course.part[1]} />
        <Part {...props.course.part[2]} />
      </>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <p>Number of exercises {props.course.part[0].exercises + props.course.part[1].exercises + props.course.part[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App