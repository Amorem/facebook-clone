import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

function InputBox() {
  const [session, loading] = useSession();

  function sendPost(event) {
    event.preventDefault();
  }
  return (
    <div className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl">
      <div className="flex items-center p-4 space-x-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1 ">
          <input
            className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name} ?`}
          />
          <button hidden onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex p-3 border-t justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="text-green-400 h-7" />
          <p className="text-xs sm:text-sm">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;