interface iInputText {
  value?: string;
  inputId: string;
  inputLabel?: string;
  labelText?: string;
  labelFor?: string;
  name: string;
  inputType?: string;
  placeholder: string;
  css: string;
  isRequired?: boolean;
  handleOnChange: (arg1: string, arg2: string) => void;
}
export default function InputText({
  inputId,
  labelText,
  name,
  inputType,
  placeholder,
  css,
  handleOnChange,
}: iInputText) {
  return (
    <>
      {labelText ? <label htmlFor={inputId}>{labelText}</label> : ""}
      <input
        id={inputId}
        name={name}
        type={inputType}
        placeholder={placeholder}
        className={css}
        onChange={(e) => handleOnChange(inputId, e.target.value)}
      />
    </>
  );
}
