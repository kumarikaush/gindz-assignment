// Card for displaying each profile 

export const Card = ({ profile }) => {

  const { id, first_name, avatar } = profile; //destructing prop

  return (

    <div className="border rounded-lg w-fit shadow-lg bg-slate-100">
      <div className="relative mt-7 mx-7">
        <div className="absolute z-10 -top-4 -right-4 w-10 h-10 bg-slate-500 border rounded-full flex justify-center items-center text-lg text-white">{id}</div>
        <div className=" p-4 border rounded-lg w-fit shadow-md">
          <img className="h-24 " src={avatar} alt="" />
        </div>
      </div>
      <div className="text-center my-5 text-xl">
        {first_name}
      </div>
    </div>

  )
}
