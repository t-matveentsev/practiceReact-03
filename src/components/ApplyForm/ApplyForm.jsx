import { Field, Form, Formik } from "formik";
import s from "./ApplyForm.module.css";

const ApplyForm = () => {
  const initialValues = {
    name: "",
    age: "",
    plan: "",
    about: "",
    agree: false,
  };
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <section className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={s.form}>
            <Field name="name" className={s.input} placeholder="Name" />
            <Field
              name="age"
              type="number"
              className={s.input}
              placeholder="Age"
            />
            <Field as="select" name="plan" className={s.input}>
              <option disabled value="">
                Choose your plan!
              </option>
              <option value="standard">Standard</option>
              <option value="pro">Pro</option>
              <option value="business">Business</option>
            </Field>
            <Field
              as="textarea"
              name="about"
              className={s.input}
              placeholder="About"
            />
            <label>
              <Field type="checkbox" name="agree" className={s.checkbox} />
              Agree to terms
            </label>
            <button disabled={!values.agree} type="submit" className={s.button}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ApplyForm;
