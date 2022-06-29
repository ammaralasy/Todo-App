import {Button} from "react-bootstrap";
const Filters = ({updateFilter, uncheckAll}) => {
	return (
		<div>
			 <Button className="mb-5 me-2" onClick={() => updateFilter('NON_COMPLETE')} variant="info">Show Incomplete</Button>
			 <Button className="mb-5 me-2"  onClick={() => updateFilter('COMPLETE')} variant="primary">Show Complete</Button>
			 <Button className="mb-5 me-2"  onClick={() => updateFilter('ALL')} variant="success">Show All</Button>
			 <Button className="mb-5"  onClick={uncheckAll} variant="danger">Uncheck All</Button>
		</div>
	);
};

export default Filters;
