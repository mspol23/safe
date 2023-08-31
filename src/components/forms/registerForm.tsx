
export function RegisterForm() {

  type Props = {
    id: string,
    inner: string
  }

  function Input(props: Props) {
    return (
      <>
        <label htmlFor={props.id}>{props.inner}</label><br />
        <input className="mb-4 border border-gray-600 rounded-md p-2 w-[100%]" type="text" id={props.id} /><br />
      </>
    )
  }

  return (
    <div className="mx-[35%] text-center">
      <form action="/" method="POST">
        <h1 className="mb-5 text-xl font-bold underline">User register:</h1>
        <Input id="name" inner="Name"/>
        <Input id="lastName" inner="Last Name"/>
        <Input id="userName" inner="User Name"/>
        <Input id="password"inner="Create Password"/>
        <Input id="confirmPassword" inner="Confirm Password"/>
      </form>
    </div>
  );
}