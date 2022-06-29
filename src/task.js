import { Alert, Button } from 'react-bootstrap';
const Task = ({ task, checkDone, removeTask }) => {
	return (
		<div key={task.id}>
			<Alert  className= {task.complete ? "line-through list w-50 p-3  d-flex justify-content-between container":"list w-50 p-3  d-flex justify-content-between container"} variant={task.complete ? "dark" : "info"}>
				{task.text}
				<div><Button onClick={() => checkDone(task.id)} variant={task.complete ? "success" : "warning"}>{task.complete ? 'uncheck' : 'check'}</Button>
					<Button onClick={() => removeTask(task.id)} variant="danger">Remove</Button>
				</div>
			</Alert>
		</div>
	);
};

export default Task;
