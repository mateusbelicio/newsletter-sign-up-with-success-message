import * as Field from './InputField.style';

const InputField = (props) => {
	return (
		<Field.Container>
			<Field.Label htmlFor={props.id}>{props.label}</Field.Label>
			<Field.Input 
				type={props.type} 
				name={props.name} 
				id={props.id} 
				value={props.value} 
				onChange={props.handleInput}
				aria-invalid={props.error}
				aria-errormessage={`error-${props.id}`}
				placeholder={props.placeholder}
			/>
			{props.error && <Field.ErrorMsg id={`error-${props.id}`}>{props.errorMsg}</Field.ErrorMsg>}
		</Field.Container>
	);
};

export default InputField;
