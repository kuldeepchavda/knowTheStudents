import styles from "@/components/footer4/ListComponent.module.css"
export default function Input({ dark }) {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row   w-full justify-between">
        <p
          className={`h-10 font-bold text-lg ${
            dark ? "text-white" : "text-black"
          } `}
        >
          Want to recieve news and updates?
        </p>
        <div className={`flex flex-col lg:flex-row gap-3   md:w-1/2 `}>
          <div className={` relative w-full lg:w-3/5 `}>
            <input
              type="text"
              name="email"
              id="emailid"
              placeholder="Email"
              className={` ${styles.input}  ${
                dark ? "text-zinc-200" : "text-zinc-800"
              } h-14 md:h-12 w-full px-4 rounded-xl ${
                dark ? "bg-gray-700" : "bg-zinc-200"
              }`}
            />
 
          </div>
          <button className="text-white w-full lg:w-2/5 h-14 md:h-12 bg-blue-500 rounded-xl md:text-base">
            Stay in the loop
          </button>
        </div>
      </div>
    </>
  );
}
