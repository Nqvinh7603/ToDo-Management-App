import { Navigate, useNavigate, useParams } from "react-router-dom";
import { retrieveTodoApi, updateTodoApi } from "../api/TodoApiService";
import { useAuth } from "../security/AuthContext";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function TodoComponent() {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const authContext = useAuth();
  const navigate = useNavigate()
  const username = authContext.username;
  useEffect(() => retrieveTodos(), [id]);
  function retrieveTodos() {
    retrieveTodoApi(username, id)
      .then((response) => {
        setDescription(response.data?.description || "");
        setTargetDate(response.data.targetDate);
      })
      .catch((error) => console.log(error));
  }
  function onSubmit(values) {
    console.log(values);
    const todo = {
      id : id,
      username : username,
      description: values.description,
      targetDate: values.targetDate,
      done: false

    }
    updateTodoApi(username, id, todo).then((response) => {
      navigate('/todos')
    })
    .catch((error) => console.log(error));
  }
  function validate(values) {
    let errors = {
      // description: "Nhập mô tả công việc hợp lệ",
      // targetDate: "Nhập ngày deadline hợp lệ"
    };
    if(values.description.length < 5){
      errors.description = "Nhập ít nhất 5 ký tự"
    }
    if(values.targetDate == null ){
      errors.description = "Nhập đúng định dạng ngày  "
    }
    console.log(values);
    return errors;
  }
  return (
    <div className="container">
      <h1>Nhập việc cần làm</h1>
      <div>
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange= {false}
          validateOnBlur={false}

        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />
              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />
              <fieldset className="form-group">
                <label>Công việc</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Deadline</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
              <div>
                <button className="btn btn-success m-5" type="submit">
                  Lưu
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
