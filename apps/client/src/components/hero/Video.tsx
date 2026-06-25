export default function Video() {
  return (
    <div className="relative" id="demo">
      <div className="mt-28 flex flex-col justify-center items-center 2xl:px-28">
        <div className="flex">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            A Quick{" "}
            <span className="bg-gradient-to-r from-[#00f0ff] to-[#7b61ff] bg-clip-text text-transparent">Look</span>{" "}
            Inside
          </h2>
        </div>
        <div className="w-full max-w-5xl mt-16 aspect-video rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.06]">
          <iframe
            src="https://www.youtube.com/embed/Bw6PRJb1gDs"
            title="Doodle Space Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
