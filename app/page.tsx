import Link from "next/link";

const SignUp = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-green-900">
      <form className="text-black border border-black p-6 bg-white rounded-md flex flex-col gap-3">
        <h1 className="text-center text-2xl font-semibold">Sign In</h1>

        <div className="flex flex-col gap-3">
          <label className="font-semibold" htmlFor="name">Name</label>
          <input className="p-2 sm:w-96 w-[80vw]" id="name" type="text" placeholder="Daniel Hashmi" />

          <label className="font-semibold" htmlFor="phone">Phone</label>
          <input className="p-2 sm:w-96 w-[80vw]" id="phone" type="text" placeholder="03423432433" />

          <label className="font-semibold" htmlFor="email">Email</label>
          <input className="p-2 sm:w-96 w-[80vw]" id="email" type="text" placeholder="daniel@gmail.com" />

          <label className="font-semibold" htmlFor="pass">Password</label>
          <input className="p-2 sm:w-96 w-[80vw]" id="pass" type="text" placeholder="daniei123DD88%%" />
        </div>
        <button className="border-2 rounded-md border-green-400 hover:bg-green-400 duration-500 px-6 py-2">Submit</button>
        <h2 className="flex gap-3">Already have an account? <Link href={'/login'} className="font-bold text-green-600 cursor-pointer hover:underline">Login</Link></h2>
      </form>
    </div>
  );
}

export default SignUp