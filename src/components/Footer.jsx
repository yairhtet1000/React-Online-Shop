export default function Footer() {
  const date = new Date();

  return (
    <footer className=" mt-auto py-2 text-center text-white bg-black">
      &copy; {date.getFullYear()}{" "}
      <a href="https://mms-it.com" className=" underline text-gray-300">
        MMS IT
      </a>
      . All rights reserved.
    </footer>
  );
}
