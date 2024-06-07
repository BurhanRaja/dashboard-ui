import { Navbar } from "./navbar";

export function ContentLayout({ breadcrumb, title, children }) {
  return (
    <>
      <div className="min-h-[100vh]">
        <Navbar title={title} breadcrumb={breadcrumb} />
        <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
      </div>
    </>
  );
}
