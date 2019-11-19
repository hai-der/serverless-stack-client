import { useState } from "react";

// custom hook
export function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        function (event) {
            setValues({
                ...fields,
                [event.target.id]: event.target.value
            });
        }
    ];
}