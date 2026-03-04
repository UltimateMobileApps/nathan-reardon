import Image from "next/image";

export default function ASEStatement() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 bg-gray-900 rounded-2xl my-12 max-w-4xl mx-auto shadow-lg">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full h-[500px] max-w-xl rounded-lg overflow-hidden border border-gray-700 shadow-md bg-white">
          <iframe
            src="/Status%20Letter.pdf"
            title="ASE Statement Letter"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ minHeight: 500, border: "none" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src="/ASE.jpeg"
          alt="ASE Logo"
          width={220}
          height={220}
          className="object-contain rounded-lg shadow-md bg-white p-2"
        />
      </div>
    </section>
  );
}
