import { useEffect, useState } from "react";

export default function useForm (initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    const changeHandler = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value 
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        
        await submitCallback(values);
        
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        submitHandler,
        setValues
    }
}