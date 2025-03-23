export function SkipToMainContent() {
  return (
    <div className="">
      <a
        href={"#main-content"}
        className={
          "bg-white border-black border-3 rounded-2xl absolute -left-full z-[999] p-3 opacity-0 focus:left-2 focus:translate-2 focus:opacity-100"
        }
      >
        skip to main content
      </a>
    </div>
  );
}
