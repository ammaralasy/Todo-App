import { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
const TaskInput = ({updateTasks}) => {
	const [input, setInput] = useState('');
	return (
		<div >
			<InputGroup type='text' onChange={e => setInput(e.target.value)} value={input} className="mb-3 w-50 container">
        <Form.Control
          placeholder="Type Here"
        />
        <Button onClick={() => {
        updateTasks(input);
        setInput('')
      }} variant="primary">Add</Button>{' '}
      </InputGroup>
		</div>
	);
};

export default TaskInput;
