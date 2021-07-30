import React from 'react'
import Card from '../UI/Card'
import styles from './User.module.css'
import Button from '../Button/Button'
import ErrorModal from '../UI/ErrorModal'

function User(props) {
  const [username, setUsername] = React.useState('');
  const [userage, setAge] = React.useState('');
  const [error, setError] = React.useState();

  const userChangeHandler = (event) => {
    setUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const submitFormHandler = (event) => {
    event.preventDefault()
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setError({
        title : "Invalid title!",
        message : "Please enter valid username and age."
      });
      return;
    }
    if (+userage < 1) {
      setError({
        title : "Invalid Age!",
        message : "Please enter valid age (> 0)"
      })
      return;
    }
    props.onAdduser(username, userage)
    setUsername('')
    setAge('')
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.user}>
        <form onSubmit={submitFormHandler}>
          <div>
            <label>Username</label>
            <input type="text" onChange={userChangeHandler} value={username} />
          </div>
          <div>
            <label>Age(Years)</label>
            <input type="number" onChange={ageChangeHandler} value={userage} />
          </div>
          <Button onSubmit={submitFormHandler} />
        </form>
      </Card>
    </div>
  )
}

export default User
