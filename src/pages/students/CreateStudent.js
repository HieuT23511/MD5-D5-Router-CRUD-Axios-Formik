import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik, validateYupSchema} from "formik";
import axios from "axios";
import * as Yup from "yup";

export const validationYupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    description: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    action: Yup.string()
        .required("Required"),
    score: Yup.number()
        .required("Required")
});

export default function CreateStudent() {
    const navigate = useNavigate()
    return (
        <>
            <h1> Create Student </h1>
            <Formik initialValues={{
                name: "",
                description: "",
                action: "",
                score: "",
            }}
                    validationSchema={validationYupSchema}
                    onSubmit={(values) => {
                        axios.post('http://localhost:3001/students',values).then(()=>{
                        navigate("/")
                        })
                    }}
            >
                <Form>
                    <table>
                        <tr>Name:
                            <td><Field name={'name'}></Field></td>
                            <ErrorMessage name={'name'}></ErrorMessage>
                        </tr>
                        <tr>Description:
                            <td><Field name={'description'}></Field></td>
                            <ErrorMessage name={'description'}></ErrorMessage>
                        </tr>
                        <tr>Action:
                            <td><Field name={'action'}></Field></td>
                            <ErrorMessage name={'action'}></ErrorMessage>
                        </tr>
                        <tr>Score:
                            <td><Field name={'score'}></Field></td>
                            <ErrorMessage name={'score'}></ErrorMessage>
                        </tr>
                    </table>
                    <button type={"submit"} > Create </button>
                </Form>
            </Formik>
        </>
    )
}