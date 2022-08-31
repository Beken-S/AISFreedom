export default function ShowError({ form, name }) {
  const showErrors = (form, name) => {
    if (form !== undefined) {
      return (
        <>
          {form.errors[name] && form.touched[name] ? (
            <div
              style={{ color: '#FF4E43', fontSize: '12px', marginTop: '5px' }}
            >
              {form.errors[name]}
            </div>
          ) : null}
        </>
      );
    }
  };
  return showErrors(form, name);
}
