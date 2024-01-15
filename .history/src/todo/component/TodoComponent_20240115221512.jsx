import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "../api/TodoApiService";
import { useAuth } from "../security/AuthContext";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";

export default function TodoComponent() {
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const authContext = useAuth();
  const username = authContext.username;
  useEffect(() => retrieveTodos(), [id]);
  function retrieveTodos() {
    retrieveTodoApi(username, id)
      .then((response) => {
        setDescription(response.data?.description || '');
        setTargetDate(response.data.targetDate);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="container">
      <h1>Nhập việc cần làm</h1>
      <div>
        <Formik initialValues={{description, targetDate}}
        enableReinitialize={true}
        onSubmit={onSubmit}
        >
        {
          (props) => (
            <Form>
            <fieldset className="form-group">
              <label>Công việc</label>
              <Field type="text" className="form-control" name="description"/>
            </fieldset>
            <fieldset className="form-group">
              <label>Deadline</label>
              <Field type="date" className="form-control" name ="targetDate"/>
            </fieldset>
            <div>
              <button className="btn btn-success m-5" type="submit">Lưu</button>
            </div>
            </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}
