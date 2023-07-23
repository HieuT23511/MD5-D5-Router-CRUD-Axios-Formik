import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {validationYupSchema} from "./CreateStudent";


export default function EditStudent() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [infoStudent, setInfoStudent] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3001/students/${id}`).then(res => {
            setInfoStudent({...res.data})
        })
    }, []);

    return (
        <>
            <h1> Edit Student </h1>
            {infoStudent.id && (
                <Formik initialValues={infoStudent}
                        validationSchema={validationYupSchema}
                        onSubmit={(values) => {
                            console.log(values)
                            axios.put(`http://localhost:3001/students/${id}`, values).then(() => {
                                navigate("/")
                            })
                        }}
                >
                    {({values}) => (
                        <Form>
                            <table>
                                <tbody>
                                <tr>
                                    <td> Name:</td>
                                    <td><Field as="input" type="text" name='name' value={values.name}/>
                                        <ErrorMessage name={'name'}></ErrorMessage>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td><Field name={'description'} value={values.description}></Field>
                                        <ErrorMessage name={'description'}></ErrorMessage>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Action:</td>
                                    <td><Field name={'action'} value={values.action}></Field>
                                        <ErrorMessage name={'action'}></ErrorMessage>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Score:</td>
                                    <td>
                                        <Field name={'score'} value={values.score}></Field>
                                        <ErrorMessage name={'score'}></ErrorMessage>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <button type={"submit"}> Edit</button>
                        </Form>
                    )}
                </Formik>
            )}
        </>
    )
}