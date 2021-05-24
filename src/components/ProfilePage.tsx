import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import { signOut } from '../firebase';
import StyledButton from './StyledButton';
import StyledInputField from './StyledInputField';
import CreateIcon from '@material-ui/icons/Create';

const _ = require('lodash');

const ProfilePage = (props: any) => {
  const [todoList, setTodoList] = useState<[string]>(['']);
  const [todo, setTodo] = useState<string>('');

  function handleAddTodo() {
    let array = todoList;
    let newArray = _.concat(array, todo);
    setTodoList(newArray);
  }

  function handleRemoveTodo(item: any) {
    let array = todoList;
    let newArray = _.pull(array, item);
    console.log('XXXXXXXXXX', newArray);
    setTodoList(newArray);
  }

  return (
    <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <StyledInputField
          id="todo"
          label="Todo"
          value={todo}
          onChange={(event: any) => setTodo(event.target.value)}
          multiline={true}
          endAdornment={<CreateIcon/>}
        />
      </div>

      <div className="w-full flex flex-col">
        <StyledButton
          type={'primary'}
          onClick={() => {
            handleAddTodo();
          }}
          label={'Submit'}
        />
      </div>

      <div>
        {todoList.length > 1 &&
        todoList
          .map((item, index) => (
            <div className="flex flex-row w-full">
              <>{item}</>
              <DeleteIcon onClick={() => handleRemoveTodo(item)}/>
            </div>
          ))}
      </div>

      <div className="w-full flex flex-col">
        <StyledButton
          type={'destructive'}
          onClick={() => {
            signOut();
          }}
          label={'Sign out'}
        />
      </div>
    </div>
  );
};

export default ProfilePage;