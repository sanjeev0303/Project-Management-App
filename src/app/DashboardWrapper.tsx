import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-100 text-gray-900  text-2xl">
      {/* sidebar */}
      sidebar

      <main
        className={`flex w-full flex-col bg-gray-100 dark:bg-dark-bg md:pl-64 text-2xl`}
      >
        {/* navbar */}
        navbar
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
