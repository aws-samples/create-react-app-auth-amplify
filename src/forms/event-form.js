const eventForm = {
    id: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Event'
        },
        validation: {
            required: true
        },
        valid: false,
        touched: false,
        label: 'Event',
        value: ''
    },
    title: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Title',
        },
        validation: {
            required: true
        },
        valid: false,
        touched: false,
        label: 'Title',
        value: ''
    },
    date: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Date'
        },
        validation: {
            required: true
        },
        label: 'Date',
        valid: false,
        touched: false,
        value: ''
    },
    description: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Description'
        },
        validation: {
            required: true
        },
        label: 'Description',
        valid: false,
        touched: false,
        value: ''
    }
};
export default eventForm;
